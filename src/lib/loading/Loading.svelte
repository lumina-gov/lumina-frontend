<div class="spinner-group">
    <div class="spinnerStyle spin1"/>
    <div class="spinnerStyle spin2"/>
    <div class="spinnerStyle spin3"/>
</div>
<style lang="stylus">
@import 'variables'

// maybe we could try a lumina logo loading bar?

.spinner-group
    display flex
.spinnerStyle
    background $brand
    height 20px
    width 20px
    margin 3px
    border-radius 50px
    display flex
    animation syncAnimation 0.6s infinite ease-in-out both
    &.spin1
        animation-delay 0.07s
    &.spin2
        animation-delay 0.14s
    &.spin3
        animation-delay 0.21s
@-webkit-keyframes syncAnimation
{
    33%
    {
        -webkit-transform: translateY(10px);
                transform: translateY(10px);
    }
    66%
    {
        -webkit-transform: translateY(-10px);
                transform: translateY(-10px);
    }
    100%
    {
        -webkit-transform: translateY(0);
                transform: translateY(0);
    }
}
@keyframes syncAnimation
{
    33%
    {
        -webkit-transform: translateY(10px);
                transform: translateY(10px);
    }
    66%
    {
        -webkit-transform: translateY(-10px);
                transform: translateY(-10px);
    }
    100%
    {
        -webkit-transform: translateY(0);
                transform: translateY(0);
    }
}
</style>