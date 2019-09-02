<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators carousel-indicators-fix">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        </ol>
        <div class="carousel-inner carousel-inner-fix">
            <div class="carousel-item active">
                <img src="asset/images/demo_1.jpg" class="d-block w-100" alt="...">
            </div>
            <div class="carousel-item">
                <img src="asset/images/demo_2.jpg" class="d-block w-100" alt="...">
            </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</template>

<script>
module.exports = {
    data: function() {
        return {

        }
    },
}
</script>

<style>
    .carousel-indicators-fix{
        margin: 0;
        background: rgba(85, 84, 84,.2);
    }
    .carousel-indicators-fix li{
        width: 12px;
        height: 12px;
        border-radius: 50%;
    }
    .carousel-indicators-fix li+li{
        margin-left: 10px;
    }
</style>