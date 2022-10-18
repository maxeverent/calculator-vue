<template>
    <Page>
        <ActionBar>
            <Label text="Calculator"/>
        </ActionBar>
        <FlexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
                <TextField v-model="textFieldValue" class="output" />
                <Button text="1" @tap="input(1)" />
                <Button text="2" @tap="input(2)"/>
                <Button text="3" @tap="input(3)"/>
                <Button text="4" @tap="input(4)" />
                <Button text="5" @tap="input(5)" />
                <Button text="6" @tap="input(6)" />
                <Button text="7" @tap="input(7)" />
                <Button text="8" @tap="input(8)" />
                <Button text="9" @tap="input(9)" />
                <Button text="0" @tap="input(0)" />
                <Button class="operation" text="." @tap="input('.')" />
                <Button class="operation" text="+" @tap="input('+')" />
                <Button class="operation" text="-" @tap="input('-')" />
                <Button class="operation" text="/" @tap="input('/')" />
                <Button class="operation" text="^2" @tap="pow(2)" />
                <Button class="operation" text="C" @tap="clearText()" />
                <Button class="operation" text="<-" @tap="clearChar()" />
                <Button class="operation" text="=" @tap="result()" />
        </FlexboxLayout>
    </Page>
</template>

<script>

  export default {
    data() {
        return {
            textFieldValue: '',
            result_: '',
            count: 0,
            convertText: ''
        }
    },
    methods: {
        input(a) {
            this.result_ = a
            try {
                if (String(this.textFieldValue).length === 20) {
                    this.result_ = ''
                }
                    this.textFieldValue += this.result_
                    this.result_ = ''
            }
            catch (err){
                this.textFieldValue = 'Ошибка'
                setTimeout(this.clearText, 700)
            }           
        },
        result() {
            try {
                if (this.textFieldValue !== '') {
                    this.result_ = String(eval(this.textFieldValue))
                    if (this.result_ === 'Infinity') {
                        this.result_ = 'Нельзя делить на ноль'
                        setTimeout(this.clearText, 700)
                    }
                    if (this.result_ === 'NaN') {
                        this.result_ = 'Ошибка'
                        setTimeout(this.clearText, 700)
                    }
                this.textFieldValue = this.result_
                this.result_ = ''
                }
            }
            catch (err){
                this.textFieldValue = 'Ошибка'
                setTimeout(this.clearText, 700)
            }
        },
        clearText(){
            this.textFieldValue = ''
            this.result_ = ''
        },
        clearChar() {
            this.count = String(this.textFieldValue).length
            this.convertText = String(this.textFieldValue)
            this.textFieldValue = (this.convertText).substr(0, this.count - 1)
        },
        pow(char) {
            try {
                this.result_ = String(Math.pow(eval(this.textFieldValue), char))
                if (this.result_ === 'NaN') {
                    this.result_ = 'Ошибка'
                    setTimeout(this.clearText, 700)
                }
                this.textFieldValue = this.result_
                this.result_ = ''
            }
            catch(err) {
                this.textFieldValue = 'Ошибка'
                setTimeout(this.clearText, 700)
            }
        },
        
    }
  };
</script>

<style scoped lang="scss">
    @import '@nativescript/theme/scss/variables/blue';

    // Custom styles
    .fas {
        @include colorize($color: accent);
    }

    label {
        font-size: 30;
    }

    .info {
        font-size: 20;
        horizontal-align: center;
        vertical-align: center;
    }

    button {
        width: 250px;
        height: 250px;
        margin-left: 55px;
        margin-top: 25px;
        margin-bottom: 30px;
        margin-right: 55px;
        font-size: 22;
        font-weight: 600;
        color: #1e242f;
        border-radius: 60px;
        box-shadow: 25px 20px 40px rgba(0,0,0,0.25), 25px 20px 40px rgba(0,0,0,0.22);
    }

    button:active{
        background-color: #9b9c9f;
    }

    .output {
        width: 1000px;
        font-size: 30;
        font-weight: 600;
        background-color: aliceblue;
        border-radius: 70px;
        margin-top: 25px;
        padding-left: 40px;
        padding-top: 10px;
        box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    }

    .operation {
        background-color: #c2c4c7;
    }
</style>
