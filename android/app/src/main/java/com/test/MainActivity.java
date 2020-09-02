package com.test;

import android.os.Bundle;
import android.util.Log;

import androidx.annotation.NonNull;

import com.facebook.react.ReactActivity;
import com.google.android.gms.tasks.OnCompleteListener;
import com.google.android.gms.tasks.Task;
import com.google.firebase.iid.FirebaseInstanceId;
import com.google.firebase.iid.InstanceIdResult;

public class MainActivity extends ReactActivity {
 private static final String TAG = "MainActivity";

   @Override
   protected void onCreate(Bundle savedInstanceState) {
       super.onCreate(savedInstanceState);
       //setContentView(R.layout.activity_main);
       FirebaseInstanceId.getInstance().getInstanceId()
               .addOnCompleteListener(new OnCompleteListener<InstanceIdResult>() {
                   @Override
                   public void onComplete(@NonNull Task<InstanceIdResult> task) {
                       if (!task.isSuccessful()) {
//To do//
                            return;
                       }

// Get the Instance ID token//
                       String token = task.getResult().getToken();
                       String msg = getString(R.string.fcm_token, token);
                       Log.d(TAG, msg);

                   }
              });

   }
  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "test";
  }
}
