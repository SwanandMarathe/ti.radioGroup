var RadioButton = require('android.widget.RadioButton'),
RadioGroup = require('android.widget.RadioGroup'),
Activity = require('android.app.Activity'),
OnClickListener = require('android.view.View.OnClickListener'),
OnCheckedChangeListener = require('android.widget.RadioGroup.OnCheckedChangeListener'),
activity = new Activity(Ti.Android.currentActivity),
radioGroup = new RadioGroup(activity),
clickListener = new OnClickListener({
	onClick: function (argument) {
		Ti.API.info('onClick - ID: ' + radioGroup.getCheckedRadioButtonId());
	}
}),
changeListener = new OnCheckedChangeListener({
	onCheckedChanged: function (argument) {
		Ti.API.info('onCheckedChanged - ID: ' + radioGroup.getCheckedRadioButtonId());
	}
});

radioGroup.setOrientation(0); // 0 horizontal - 1 vertical
radioGroup.setOnCheckedChangeListener(changeListener);

var radioButtonView = new RadioButton(activity);
radioButtonView.setText("RadioButton");
radioButtonView.setOnClickListener(clickListener);
radioButtonView.setId(10);
radioGroup.addView(radioButtonView);

var radioButtonView2 = new RadioButton(activity);
radioButtonView2.setText("RadioButton2");
radioButtonView2.setOnClickListener(clickListener);
radioButtonView2.setId(20);
radioButtonView2.setChecked(true);
radioGroup.addView(radioButtonView2);

Ti.API.info('getText ' + radioButtonView.getText());

$.radio.add(radioGroup);

$.index.open();
