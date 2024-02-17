input.onButtonPressed(Button.A, function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Small_Fn(
        "Servo_Motors: Right Only"
        )
        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
        "50% Power for Medium Speed"
        )
        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
        "0% Power for Stop"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        0,
        50
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Fn(
        "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
        )
        basic.showLeds(`
            . # . # .
            . # . . .
            . # . . .
            # # # . .
            . # . . .
            `)
    }
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Small_Fn(
        "Continue Current State for Time Below"
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(1, quest_Time_Units_Enum.Seconds)
    }
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Small_Fn(
        "Servo_Motors: All Stop"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        0,
        0
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Fn(
        "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
        )
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Small_Fn(
        "Servo_Motors: Left + Right"
        )
        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
        "50% Power for Medium Speed"
        )
        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
        "0% Power for Stop"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        50,
        50
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Fn(
        "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
        )
        basic.showLeds(`
            . # . # .
            . # . # .
            . # . # .
            # # # # #
            . # . # .
            `)
    }
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Small_Fn(
        "Continue Current State for Time Below"
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(1, quest_Time_Units_Enum.Seconds)
        quest_Note_3.quest_Show_String_For_Note_Small_Fn(
        "Servo_Motors: All Stop"
        )
    }
    if (true) {
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        0,
        0
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Fn(
        "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
        )
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Small_Fn(
        "Servo_Motors: Left Only"
        )
        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
        "50% Power for Medium Speed"
        )
        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
        "0% Power for Stop"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        50,
        0
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Fn(
        "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
        )
        basic.showLeds(`
            . # . # .
            . . . # .
            . . . # .
            . . # # #
            . . . # .
            `)
    }
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Small_Fn(
        "Continue Current State for Time Below"
        )
        quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(1, quest_Time_Units_Enum.Seconds)
    }
    if (true) {
        quest_Note_3.quest_Show_String_For_Note_Small_Fn(
        "Servo_Motors: All Stop"
        )
        quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
        quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
        0,
        0
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Fn(
        "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
        )
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
if (true) {
    quest_Note_3.quest_Show_String_For_Note_Small_Fn(
    "Download/Flash Confirmation Icon"
    )
    basic.showIcon(IconNames.Happy)
    quest_Note_3.quest_Show_String_For_Note_Small_Fn(
    "Continue Current State for Time Below"
    )
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Fn(2, quest_Time_Units_Enum.Seconds)
}
if (true) {
    quest_Note_3.quest_Show_String_For_Note_Small_Fn(
    "Servo_Motors: All Stop"
    )
    quest_Note_2.quest_Show_String_For_Note_Small_Fn(
    "0% Power for Stop"
    )
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Fn(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    0,
    0
    )
    quest_Note_1.quest_Show_String_For_Note_Small_Fn(
    "'micro:bit' Viewed Upside-Down, Same for LEDs Below"
    )
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
basic.forever(function () {
    quest_Note_3.quest_Show_String_For_Note_Big_Fn(
    "Block Coding Special Notes"
    )
    if (true) {
        quest_Note_2.quest_Show_String_For_Note_Big_Fn(
        "'If true then' Block also for modular organization and..."
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Fn(
        "... convenient 'copy/paste/delete' of a group of blocks"
        )
    }
    if (true) {
        quest_Note_2.quest_Show_String_For_Note_Big_Fn(
        "In-Line Comments w/ Multiple-Colors for Varying Purposes and Priorities..."
        )
        quest_Note_2.quest_Show_String_For_Note_Big_Fn(
        "... Suggested Uses:"
        )
        quest_Note_1.quest_Show_String_For_Note_Small_Fn(
        "Comment: Priority Lo"
        )
        quest_Note_2.quest_Show_String_For_Note_Small_Fn(
        "Comment: Priority Mi"
        )
        quest_Note_3.quest_Show_String_For_Note_Small_Fn(
        "Comment: Priority Hi"
        )
        quest_Note_4.quest_Show_String_For_Note_Small_Fn(
        "Question?: Priority Hi!"
        )
        quest_Note_5.quest_Show_String_For_Note_Small_Fn(
        "Urgent TODO: Priority Hi!! "
        )
    }
})
