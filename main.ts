////jwc o input.onButtonPressed(Button.A, function () {
////jwc o     if (true) {
////jwc o         quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Servo_Motors: Right Only"
////jwc o         )
////jwc o         quest_Note_2.quest_Show_String_For_Note_Small_Fn(
////jwc o         "50% Power for Medium Speed"
////jwc o         )
////jwc o         quest_Note_2.quest_Show_String_For_Note_Small_Fn(
////jwc o         "0% Power for Stop"
////jwc o         )
////jwc o         quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
////jwc o         quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
////jwc o         0,
////jwc o         50
////jwc o         )
////jwc o         quest_Note_1.quest_Show_String_For_Note_Small_Fn(
////jwc o         "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
////jwc o         )
////jwc o         basic.showLeds(`
////jwc o             . # . # .
////jwc o             . # . . .
////jwc o             . # . . .
////jwc o             # # # . .
////jwc o             . # . . .
////jwc o             `)
////jwc o     }
////jwc o     if (true) {
////jwc o         quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Continue Current State for Time Below"
////jwc o         )
////jwc o         quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(1, quest_Time_Units_Enum.Seconds)
////jwc o     }
////jwc o     if (true) {
////jwc o         quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Servo_Motors: All Stop"
////jwc o         )
////jwc o         quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
////jwc o         quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
////jwc o         0,
////jwc o         0
////jwc o         )
////jwc o         quest_Note_1.quest_Show_String_For_Note_Small_Fn(
////jwc o         "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
////jwc o         )
////jwc o         basic.showLeds(`
////jwc o             . # . # .
////jwc o             . . . . .
////jwc o             . . . . .
////jwc o             . . . . .
////jwc o             . . . . .
////jwc o             `)
////jwc o     }
////jwc o })
////jwc o input.onButtonPressed(Button.AB, function () {
////jwc o     if (true) {
////jwc o         quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Servo_Motors: Left + Right"
////jwc o         )
////jwc o         quest_Note_2.quest_Show_String_For_Note_Small_Fn(
////jwc o         "50% Power for Medium Speed"
////jwc o         )
////jwc o         quest_Note_2.quest_Show_String_For_Note_Small_Fn(
////jwc o         "0% Power for Stop"
////jwc o         )
////jwc o         quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
////jwc o         quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
////jwc o         50,
////jwc o         50
////jwc o         )
////jwc o         quest_Note_1.quest_Show_String_For_Note_Small_Fn(
////jwc o         "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
////jwc o         )
////jwc o         basic.showLeds(`
////jwc o             . # . # .
////jwc o             . # . # .
////jwc o             . # . # .
////jwc o             # # # # #
////jwc o             . # . # .
////jwc o             `)
////jwc o     }
////jwc o     if (true) {
////jwc o         quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Continue Current State for Time Below"
////jwc o         )
////jwc o         quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(1, quest_Time_Units_Enum.Seconds)
////jwc o         quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Servo_Motors: All Stop"
////jwc o         )
////jwc o     }
////jwc o     if (true) {
////jwc o         quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
////jwc o         quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
////jwc o         0,
////jwc o         0
////jwc o         )
////jwc o         quest_Note_1.quest_Show_String_For_Note_Small_Fn(
////jwc o         "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
////jwc o         )
////jwc o         basic.showLeds(`
////jwc o             . # . # .
////jwc o             . . . . .
////jwc o             . . . . .
////jwc o             . . . . .
////jwc o             . . . . .
////jwc o             `)
////jwc o     }
////jwc o })
////jwc o input.onButtonPressed(Button.B, function () {
////jwc o     if (true) {
////jwc o         quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Servo_Motors: Left Only"
////jwc o         )
////jwc o         quest_Note_2.quest_Show_String_For_Note_Small_Fn(
////jwc o         "50% Power for Medium Speed"
////jwc o         )
////jwc o         quest_Note_2.quest_Show_String_For_Note_Small_Fn(
////jwc o         "0% Power for Stop"
////jwc o         )
////jwc o         quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
////jwc o         quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
////jwc o         50,
////jwc o         0
////jwc o         )
////jwc o         quest_Note_1.quest_Show_String_For_Note_Small_Fn(
////jwc o         "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
////jwc o         )
////jwc o         basic.showLeds(`
////jwc o             . # . # .
////jwc o             . . . # .
////jwc o             . . . # .
////jwc o             . . # # #
////jwc o             . . . # .
////jwc o             `)
////jwc o     }
////jwc o     if (true) {
////jwc o         quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Continue Current State for Time Below"
////jwc o         )
////jwc o         quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(1, quest_Time_Units_Enum.Seconds)
////jwc o     }
////jwc o     if (true) {
////jwc o         quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Servo_Motors: All Stop"
////jwc o         )
////jwc o         quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
////jwc o         quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
////jwc o         0,
////jwc o         0
////jwc o         )
////jwc o         quest_Note_1.quest_Show_String_For_Note_Small_Fn(
////jwc o         "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
////jwc o         )
////jwc o         basic.showLeds(`
////jwc o             . # . # .
////jwc o             . . . . .
////jwc o             . . . . .
////jwc o             . . . . .
////jwc o             . . . . .
////jwc o             `)
////jwc o     }
////jwc o })
////jwc o if (true) {
////jwc o     quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o     "Download/Flash Confirmation Icon"
////jwc o     )
////jwc o     basic.showIcon(IconNames.Happy)
////jwc o     quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o     "Continue Current State for Time Below"
////jwc o     )
////jwc o     quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(2, quest_Time_Units_Enum.Seconds)
////jwc o }
////jwc o if (true) {
////jwc o     quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o     "Servo_Motors: All Stop"
////jwc o     )
////jwc o     quest_Note_2.quest_Show_String_For_Note_Small_Fn(
////jwc o     "0% Power for Stop"
////jwc o     )
////jwc o     quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
////jwc o     quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
////jwc o     0,
////jwc o     0
////jwc o     )
////jwc o     quest_Note_1.quest_Show_String_For_Note_Small_Fn(
////jwc o     "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
////jwc o     )
////jwc o     basic.showLeds(`
////jwc o         . # . # .
////jwc o         . . . . .
////jwc o         . . . . .
////jwc o         . . . . .
////jwc o         . . . . .
////jwc o         `)
////jwc o }
////jwc o basic.forever(function () {
////jwc o     quest_Note_3.quest_Show_String_For_Note_Big_Fn(
////jwc o     "Block Coding Special Notes"
////jwc o     )
////jwc o     if (true) {
////jwc o         quest_Note_2.quest_Show_String_For_Note_Big_Fn(
////jwc o         "'If true then' Block also for modular organization and..."
////jwc o         )
////jwc o         quest_Note_2.quest_Show_String_For_Note_Big_Fn(
////jwc o         "... convenient 'copy/paste/delete' of a group of blocks"
////jwc o         )
////jwc o     }
////jwc o     if (true) {
////jwc o         quest_Note_2.quest_Show_String_For_Note_Big_Fn(
////jwc o         "In-Line Comments w/ Multiple-Colors for Varying Purposes and Priorities..."
////jwc o         )
////jwc o         quest_Note_2.quest_Show_String_For_Note_Big_Fn(
////jwc o         "... Suggested Uses:"
////jwc o         )
////jwc o         quest_Note_1.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Comment: Priority Lo"
////jwc o         )
////jwc o         quest_Note_2.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Comment: Priority Mi"
////jwc o         )
////jwc o         quest_Note_3.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Comment: Priority Hi"
////jwc o         )
////jwc o         quest_Note_4.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Question?: Priority Hi!"
////jwc o         )
////jwc o         quest_Note_5.quest_Show_String_For_Note_Small_Fn(
////jwc o         "Urgent TODO: Priority Hi!! "
////jwc o         )
////jwc o     }
////jwc o })
