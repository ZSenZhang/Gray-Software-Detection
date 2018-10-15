import { observable, action, runInAction } from 'mobx';
import BaseProvider from '../../utils/Provider';

class ApkStore {
  listUrl = '/api/apk/';
  @observable listLoading = true;

  @observable apks  = {
    apks: [],
  };

  @action getApks = async () => {
    const { err, data } = await BaseProvider.get(this.listUrl);
    runInAction('update links', () => {
      if(!err) {
        this.links.files = data;
      }
      this.listLoading = false;
    });
  }
}

export default new ApkStore();
