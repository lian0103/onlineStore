<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators carousel-indicators-fix">
            <li data-target="#carouselExampleIndicators"  v-bind:data-slide-to="item.id - 1 "
            v-for="item in slideimgs" :key="item.id" v-bind:class="{ active:item.id == 1?true:false }"
            ></li>
            <!-- <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li> -->
        </ol>
        <div class="carousel-inner carousel-inner-fix">
            <div class="carousel-item" v-for="item in slideimgs" :key="item.id" v-bind:class="{ active:item.id == 1?true:false }">
                <img class="d-block w-100" v-bind:src="item.src" alt />
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
            slideimgs:[
                {id:1,src:'asset/images/demo_1.jpg'},
                {id:2,src:'asset/images/demo_2.jpg'},
                {id:3,src:'asset/images/demo_1.jpg'},
                {id:4,src:'asset/images/demo_2.jpg'}
            ],
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