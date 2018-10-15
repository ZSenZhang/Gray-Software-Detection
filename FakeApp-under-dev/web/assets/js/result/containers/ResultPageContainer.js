import React from 'react';
import ResultContainer from './ResultContainer';
import AppCard from '../components/AppCard';
import ApkStore from '../../share/stores/ApkStore';

import '../style/style.scss';

class ResultPageContainer extends React.Component {

  componentDidMount() {
    ApkStore.getApks();
  }

  render() {
    /*
    const apk = {
      iconUrl: '/media/tabikaeru.png',
      binImage: '/media/tabikaeru_bin.jpg',
      name: '旅かえる',
      filename: '旅かえる.apk',
      size: '50673845',
      alikeIconUrl: '/media/tabikaeru_cn.png',
      alikeApkName: '青蛙环球之旅中文版',
      packageName: 'jp.co.hit_point.tabikaeru',
      version: '1.1.2',
      fileHash: 'ab05cefee1b71bfc702462e5feb59dfe',
      certHash: 'F7:F9:E9:CD:8A:A0:8D:71:7C:61:0C:20:1F:66:9C:7C:6A:6B:75:8F',
      developer: 'HitPoint',
      updateTime: '5/29/2018',
      suspicion: '20.1',
      permissions: [
        'android.permission.ACCESS_NETWORK_STATE',
        'android.permission.INTERNET',
        'android.permission.VIBRATE',
        'com.android.vending.BILLING',
      ],
      activities: [
        'net.gree.unitywebview.CUnityPlayerActivity',
        'com.unity.purchasing.googleplay.PurchaseActivity',
        'com.unity.purchasing.googleplay.VRPurchaseActivity',
        'com.google.android.gms.ads.AdActivity',
        'com.unity3d.ads.adunit.AdUnitActivity',
        'com.unity3d.ads.adunit.AdUnitTransparentActivity',
        'com.unity3d.ads.adunit.AdUnitTransparentSoftwareActivity',
        'com.unity3d.ads.adunit.AdUnitSoftwareActivity',
      ],
      screenshots: [
        '/media/tabikaeru_s0.jpg',
        '/media/tabikaeru_s1.jpg',
      ],
    };

    const apk2 = {
      iconUrl: '/media/tabikaeru_cn.png',
      binImage: '/media/tabikaeru_cn_bin.jpg',
      name: '青蛙环球之旅中文版',
      filename: '青蛙环球之旅中文版.apk',
      size: '61287082',
      alikeApkName: '旅かえる',
      alikeIconUrl: '/media/tabikaeru.png',
      packageName: 'com.frogjourney.pandafrog.dbzq.m',
      fileHash: '081cd84500026b54a1ac378f5fe5c152',
      certHash: '36:45:AF:60:F8:30:25:26:D3:76:40:5C:59:65:96:15:83:79:C7:C2',
      version: '1.12',
      developer: 'pandafrog',
      updateTime: '5/30/2018',
      suspicion: '83.4',
      permissions: [
       'android.permission.ACCESS_COARSE_LOCATION',
       'android.permission.ACCESS_COARSE_UPDATES',
       'android.permission.ACCESS_NETWORK_STATE',
       'android.permission.ACCESS_NETWORK_STATE',
       'android.permission.ACCESS_WIFI_STATE',
       'android.permission.ACCESS_WIFI_STATE',
       'android.permission.BLUETOOTH',
       'android.permission.BLUETOOTH_ADMIN',
       'android.permission.GET_ACCOUNTS',
       'android.permission.GET_TASKS',
       'android.permission.GET_TASKS',
       'android.permission.INTERNET',
       'android.permission.INTERNET',
       'android.permission.KILL_BACKGROUND_PROCESSES',
       'android.permission.MANAGE_ACCOUNTS',
       'android.permission.READ_EXTERNAL_STORAGE',
       'android.permission.READ_LOGS',
       'android.permission.READ_PHONE_STATE',
       'android.permission.RECORD_AUDIO',
       'android.permission.RESTART_PACKAGES',
       'android.permission.SYSTEM_ALERT_WINDOW',
       'android.permission.USE_CREDENTIALS',
       'android.permission.VIBRATE',
       'android.permission.VIBRATE',
       'android.permission.WAKE_LOCK',
       'android.permission.WRITE_EXTERNAL_STORAGE',
       'android.permission.WRITE_EXTERNAL_STORAGE',
       'android.permission.WRITE_SETTINGS',
       'com.android.vending.BILLING',
       'com.android.vending.BILLING',
       'com.frogjourney.pandafrog.permission.C2D_MESSAGE',
       'com.google.android.c2dm.permission.RECEIVE',
      ],
      activities: [
       'com.sdkbox.activity.CustomActivity',
       'com.facebook.ads.AudienceNetworkActivity',
       'com.appsflyer.GetDeepLinkingActivity',
       'com.facebook.unity.FBUnityLoginActivity',
       'com.facebook.unity.FBUnityDialogsActivity',
       'com.facebook.unity.FBUnityAppLinkActivity',
       'com.facebook.unity.FBUnityDeepLinkingActivity',
       'com.facebook.unity.FBUnityGameRequestActivity',
       'com.facebook.unity.FBUnityCreateGameGroupActivity',
       'com.facebook.unity.FBUnityJoinGameGroupActivity',
       'com.facebook.unity.AppInviteDialogActivity',
       'com.facebook.FacebookActivity',
       'com.facebook.CustomTabMainActivity',
       'com.google.android.gms.ads.AdActivity',
       'com.google.android.gms.common.api.GoogleApiActivity',
       'com.wemob.ads.we.WeInterstitialAdActivity',
       'com.bmob.adsdk.InterstitialAdActivity',
       'com.kuaiyouxi.gamepad.sdk.shell.KyxShellActivity',
       'com.kuaiyouxi.gamepad.sdk.LauncherActivity',
       'com.kuaiyouxi.gamepad.sdk.KyxSDKActivity',
       'com.xiaolu123.stub.Activity00',
       'com.xiaolu123.stub.Activity01',
       'com.xiaolu123.stub.Activity02',
       'com.xiaolu123.stub.Activity03',
       'com.xiaolu123.stub.Activity04',
       'com.xiaolu123.stub.Activity05',
       'com.xiaolu123.stub.Activity06',
       'com.xiaolu123.stub.Activity07',
       'com.xiaolu123.stub.Activity08',
       'com.xiaolu123.stub.Activity09',
       'com.xiaolu123.stub.Activity10',
       'com.xiaolu123.stub.Activity11',
       'com.xiaolu123.stub.Activity12',
       'com.xiaolu123.stub.Activity13',
       'com.xiaolu123.stub.Activity14',
       'com.xiaolu123.stub.Activity100',
       'com.xiaolu123.stub.Activity101',
       'com.xiaolu123.stub.Activity102',
       'com.xiaolu123.stub.Activity103',
       'com.xiaolu123.stub.Activity104',
      ],
      screenshots: [
        '/media/tabikaeru_cn_s0.jpg',
        '/media/tabikaeru_cn_s1.jpg',
      ],
    };
*/
    return(
      <div className='result-page'>
        {
          ApkStore.listLoading?
          <div />:
          <div>
            <AppCard apk={ApkStore.apks.apks[0]} />
            <ResultContainer apk={ApkStore.apks.apks[0]}/>
          </div>
        }
      </div>
    );
  }
}

export default ResultPageContainer;
