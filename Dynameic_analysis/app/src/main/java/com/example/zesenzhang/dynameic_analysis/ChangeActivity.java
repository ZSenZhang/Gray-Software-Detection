package de.robv.android.xposed.mods.tutorial;

import android.graphics.Color;
import android.webkit.WebView.FindListener;
import android.widget.TextView;
import de.robv.android.xposed.IXposedHookLoadPackage;
import de.robv.android.xposed.XC_MethodHook;
import de.robv.android.xposed.XC_MethodHook.MethodHookParam;
import de.robv.android.xposed.callbacks.XC_LoadPackage.LoadPackageParam;

import static de.robv.android.xposed.XposedHelpers.findAndHookMethod;
public class ChangeActivity implements IXposedHookLoadPackage {

    @Override
    public void handleLoadPackage(LoadPackageParam param) throws Throwable {
        if(!param.packageName.equals("com.android.systemui"))
            return;
        findAndHookMethod("com.android.systemui.statusbar.policy.Clock",param.classLoader, "updateClock", new XC_MethodHook() {
            @Override
            protected void beforeHookedMethod(MethodHookParam param) throws Throwable {
                // this will be called before the clock was updated by the original method
            }
            @Override
            protected void afterHookedMethod(MethodHookParam param) throws Throwable {
                TextView tv = (TextView) param.thisObject;//获取调用该方法类的对象
                String text = tv.getText().toString();
                tv.setText(text + " :)");
                tv.setTextColor(Color.RED);
            }
        });


    }


}