<style lang='sass' scoped>



.details{
  width:100%;
  .model--image {
      margin-left: auto;
      margin-right: auto;
  }

  .model--header {
      font-size: 20px;
      text-align: center;
  }

  .headimage {
      width: 100%;
      height: 400px;
      object-fit: contain;
  }
}

</style>

<template>

<imagemodal :show.sync="showImageModal">
    <div slot="header">
        <div class='model--header'>Images for {{titleDetails.Name}}</div>
    </div>
    <div slot="body">
        <carousel class="image-carousel" :interval="0" :indicators=false>

            <slider v-for="image in titleDetails.Images">
                <img v-bind:src="image" class='model--image' />
            </slider>
        </carousel>
    </div>
</imagemodal>

<div class='page'>

  <mdl-card class="details" actions="actions" actions-text="Get started" v-bind:class='marginedClass' v-bind:style='marginstyles'>
    <div slot="title" class='slot' v-bind:style='titleDetails.HeadImage | generateImageStyle'>

      <a href='#' @click="showImageModal = true" v-bind:class="hasGallery? '' : 'not-active'">
          <img v-bind:src="titleDetails.HeadImage" class='headimage' />
      </a>
          <h1>{{titleDetails.Name}}</h1>
    </div>

    <div slot="supporting-text" class='text caption'>
      <p  v-text='titleDetails.Description'></p>
    </div>

    <div slot="actions" class='action-box'>

    </div>

  </mdl-card>


    details
</div>

</template>

<script>

var store = require('../store.js')
var modal = require('../components/modal')
var carousel = require('vue-strap').carousel
var slider = require('vue-strap').slider

var vmdl = require('vue-mdl')
var card = vmdl.components['mdl-card']

var cardHeight = '200px'
var _ = require('underscore-node')

module.exports = {

    data: function() {
        return {
            showImageModal: false,
            hasGallery: false
        }
    },

    filters: {
        generateImageStyle: function(url) {
            return {
                height: cardHeight,
                'background-size': 'cover',
                'background-image': 'url(' + url + ')'
            }
        },
        truncate: function(str, length, truncation) {
            length = length || 30
            truncation = _.isUndefined(truncation) ? '...' : truncation
            return str.length > length ? str.slice(0, length - truncation.length) + truncation : String(str)
        }
    },

    computed: {
        titleDetails() {
            try {
                var name = this.$route.params.titleName
                var t = store.default.actions.GetDetails(name)

                if (typeof(t) === 'undefined') {
                    location.href = '/'
                }

                return t
            } catch (ex) {
                console.log(ex)

            }
        }
    },

    components: {
        'imagemodal': modal,
        'carousel': carousel,
        'slider': slider,
        'mdl-card': card
    }
}

</script>
