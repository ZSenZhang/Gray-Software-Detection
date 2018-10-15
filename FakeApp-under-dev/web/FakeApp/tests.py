# APK文件分析的测试用例，目前包括静态分析和模型分析用例
class AnalyseApkTests(TestCase):
  def setUp(self):
    self.clearCache()

  def test_static_analyse(self):
    with open('qq.apk','rb') as f:
      self.client.post('/analyse/static', {'apk': f}) # 模拟用户提交APK文件
    self.assertEqual(Apk.objects.count(), 1) # 检查上传后数据库中记录变化
    apk = Apk.objects.all()[0]
    self.assertEqual('com.tencent.mobileqq', apk.name)  # 检查静态分析得到APK包名的正确性
    with open('qq.apk','rb') as f:
      self.client.post('/analyse/static', {'apk': f})
    self.assertEqual(Apk.objects.count(), 1)
    with open('tim.apk','rb') as f:
      self.client.post('/analyse/static', {'apk': f})
    self.assertEqual(Apk.objects.count(), 2)
    apk = Apk.objects.all()[1]
    self.assertEqual('com.tencent.tim', apk.name)

  
  def test_static_analyse_error(self):
    response = self.client.post('/analyse/static', {'apk': 'test string'}) # 模拟用户异常提交
    self.assertEqual(response.status_code, 400)
    self.assertEqual(Apk.objects.count(), 0)

  def test_model_analyse(self):
    with open('qq.apk','rb') as f:
      self.client.post('/analyse/static', {'apk': f}) # 模拟用户提交APK文件进行静态分析
    self.assertEqual(Apk.objects.count(), 1)
    apk = Apk.objects.all()[0]
    self.assertEqual(NULL, apk.model_output)
    self.assertEqual('com.tencent.mobileqq', apk.name)
    self.client.post('/analyse/model', {'aid': apk.aid}) # 模拟用户进入模型分析流程
    apk = Apk.objects.all()[0]
    self.assertEqual(True, apk.model_output) # 检测模型输出
    with open('fakeqq.apk','rb') as f:
      self.client.post('/analyse/static', {'apk': f})
    self.assertEqual(Apk.objects.count(), 2)
    apk = Apk.objects.all()[1]
    self.assertEqual(NULL, apk.model_output)
    self.assertEqual('com.tencent.mobileqq', apk.name)
    self.client.post('/analyse/model', {'aid': apk.aid})
    apk = Apk.objects.all()[1]
    self.assertEqual(False, apk.model_output)

  def test_model_analyse_error(self):
    response = self.client.post('/analyse/model', {'aid': 666666})
    self.assertEqual(response.status_code, 400)

# 开发者通道的测试用例，包括登录测试与提交、删改测试
class DeveloperPanelTests(TestCase):
  path = '/developer/login' # 开发者登录路径
  def setUp(self):
    self.developer = self.createUser('developer')
    self.developer.email = '66666666@qq.com'
    self.developer.save() # 添加测试用开发者帐号
    self.developer2 = self.createUser('developer2')
    self.developer2.email = '666666662@qq.com'
    self.developer2.save() # 添加测试用开发者帐号
    self.clearCache()
  
  def test_signin_success(self):
    signin_form = {
        'username_or_email': self.developer.username,
        'password': self.get_password(self.developer.username),
        'remember': False
    }
    response = self.client.post(self.path, data=json.dumps(signin_form), decode=False, content_type='application/json') # 模拟开发者登录
    self.assertEqual(response.status_code, 302) # 登录成功，返回重定向状态302

  def test_signin_error(self):
    signin_form = {
        'username_or_email': self.developer.username,
        'password': '666666666',
        'remember': False
    }
    response = self.client.post(self.path, data=json.dumps(signin_form), decode=False, content_type='application/json')
    self.assertEqual(response.status_code, 401) # 登录失败，返回未授权状态401

  def test_upload_authed_apk(self):
    with self.logged_in_user(self.developer):
      with open('qq.apk','rb') as f:
        self.client.post('/developer/apk', {'auth':True, 'apk': f}) # 模拟开发者上传真实APK文件
      self.assertEqual(Apk.objects.count(), 1)
      apk = Apk.objects.all()[0]
      self.assertEqual(True, apk.developer_auth)
      with open('fakeqq.apk','rb') as f:
        self.client.post('/developer/apk', {'auth':False, 'apk': f}) # 模拟开发者上传虚假APK文件
      self.assertEqual(Apk.objects.count(), 2)
      apk = Apk.objects.all()[1]
      self.assertEqual(False, apk.developer_auth)

  def test_remove_authed_apk(self):
    with self.logged_in_user(self.developer):
      with open('qq.apk','rb') as f:
        self.client.post('/developer/apk', {'auth':True, 'apk': f})
      self.assertEqual(Apk.objects.count(), 1)
      apk = Apk.objects.all()[0]
      self.client.delete('/developer/apk/%d/' % apk.aid) # 模拟开发者移除APK文件
      self.assertEqual(Apk.objects.count(), 0)

    with self.logged_in_user(self.developer2):
      response = self.client.delete('/developer/apk/%d/' % apk.aid) # 模拟开发者移除其他开发者的APK文件
      self.assertEqual(response.status_code, 401) # 移除失败，返回未授权状态401
