<script>

export let size = "32px"

</script>

<div
    style:--size={ size }
    class="profile">

</div>
<style>
.profile {
    width: var(--size);
    height: var(--size);
    display: inline-flex;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    background-image: url('/images/profile.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
}
</style>