<template >
    <div class="loader d-flex justify-content-center">
        <div class="shadow">
            <div class="loader">
                <div class="item top"></div>
                <div class="item left"></div>
                <div class="item right"></div>
                <div class="item bottom"></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.shadow {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    box-shadow: 0 15px 55px rgba(0, 0, 0, 0.2);
    background-color: #374259;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}

.loader {
    display: grid;
    place-items: center;
    position: relative;
    width: 100%;
    height: 100%;
    animation: rotate 2s infinite linear;
}

.item {
    position: absolute;
    width: 25px;
    height: 25px;
    background-color: #00DFA2;
    border-radius: 50%;
}

@keyframes top {

    from,
    to {
        transform: translateY(-15px);
    }

    50% {
        transform: translateY(-40px);
    }
}

.top {
    animation: top 1s infinite linear;
}

@keyframes left {

    from,
    to {
        transform: translateX(-15px);
    }

    50% {
        transform: translateX(-40px);
    }
}

.left {
    animation: left 1s infinite linear;
}

@keyframes right {

    from,
    to {
        transform: translateX(15px);
    }

    50% {
        transform: translateX(40px);
    }
}

.right {
    background-color: #0079FF;
    animation: right 1s infinite linear;
}

@keyframes bottom {

    from,
    to {
        transform: translateY(15px);
    }

    50% {
        transform: translateY(40px);
    }
}

.bottom {
    animation: bottom 1s infinite linear;
}
</style>