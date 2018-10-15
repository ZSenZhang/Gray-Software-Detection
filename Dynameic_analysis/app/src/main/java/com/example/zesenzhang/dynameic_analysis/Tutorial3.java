package de.robv.android.xposed.mods.tutorial;

import android.content.res.XResources;
import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import de.robv.android.xposed.IXposedHookInitPackageResources;
import de.robv.android.xposed.callbacks.XC_InitPackageResources.InitPackageResourcesParam;

public class Tutorial3 implements  IXposedHookInitPackageResources  {

    @Override
    public void handleInitPackageResources(InitPackageResourcesParam resparam) throws Throwable {
        //只替换systemui应用的资源
        if (!resparam.packageName.equals("com.android.systemui"))
            return;

        // 替换资源的不同方式
        resparam.res.setReplacement(0x7f080083, "YEAH!"); // WLAN toggle text. You should not do this because the id is not fixed. Only for framework resources, you could use android.R.string.something
        resparam.res.setReplacement("com.android.systemui:string/quickpanel_bluetooth_text", "WOO!");
        resparam.res.setReplacement("com.android.systemui", "string", "quickpanel_gps_text", "HOO!");
        resparam.res.setReplacement("com.android.systemui", "integer", "config_maxLevelOfSignalStrengthIndicator", 6);
        resparam.res.setReplacement("com.android.systemui", "drawable", "status_bar_background", new XResources.DrawableLoader() {
            @Override
            public Drawable newDrawable(XResources res, int id) throws Throwable {
                return new ColorDrawable(Color.WHITE);
            }
        });//你不能直接使用Drawble类进行替换，因为Drawble类可以影响其他引用Ddrawble类实例的ImageView ,最好使用一个包装器。
    }

}