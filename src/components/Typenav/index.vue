<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="moveOutDiv" @mouseenter="isShow = true">
        <h2 class="all">全部商品分类</h2>
        <!-- 给sort添加过度效果 -->
        <transition name="sort">
          <div class="sort" v-show="isShow">
            <!-- 通过事件委派的形式给父元素添加事件，让子元素被点击跳转的时候携带参数和id -->
            <div class="all-sort-list2" @click="toSearch($event)">
              <div
                class="item"
                :class="{ item_on: currentIndex === index }"
                v-for="(c1, index) in catgorylist"
                :key="c1.categoryId"
                @mouseenter="moveInItem(index)"
              >
                <h3>
                  <a
                    href="javascript:"
                    :data-category1Id="c1.categoryId"
                    :data-categoryName="c1.categoryName"
                    >{{ c1.categoryName }}</a
                  >
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="c2 in c1.categoryChild"
                      :key="c2.categoryId"
                    >
                      <dt>
                        <a
                          href="javascript:"
                          :data-category2Id="c2.categoryId"
                          :data-categoryName="c2.categoryName"
                          >{{ c2.categoryName }}</a
                        >
                      </dt>
                      <dd v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <em>
                          <a
                            href="javascript:"
                            :data-category3Id="c3.categoryId"
                            :data-categoryName="c3.categoryName"
                            >{{ c3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
//  import _ from "lodash";//这是全部引入lodash，缺点是打包后体积比较大，下面是可以直接引入throttle节流函数
import throttle from "lodash/throttle";
export default {
  name: "Typenav",

  data() {
    return {
      currentIndex: -1,
      isShow: true,
    };
  },
  mounted() {
    //不能在这里发请求，因为两个组件都要用那么跳转两个页面就需要发两次请求
    //重复发请求，而三级列表的数据是一样的，没必要发那么多次
    //this.$store.dispatch("getCatgorylist");
    if (this.$route.path !== "/home") {
      this.isShow = false;
    }
  },
  methods: {
    //节流函数，防止移入移出过快导致浏览器卡顿
    moveInItem: throttle(
      function (index) {
        this.currentIndex = index;
      },
      50,
      { trailing: false } //指定调用在节流结束后。
    ),
    //给父元素添加事件委托的回调函数
    toSearch(event) {
      let targetNode = event.target; //获取真正触发事件的目标元素
      let data = targetNode.dataset; //获取触发事件元素的自定义属性data的对象
      let { categoryname, category1id, category2id, category3id } = data; //把dataset中的集合解构赋值

      if (categoryname) {
        let location = {
          name: "search",
        };
        let query = {
          categoryName: categoryname,
        };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        location.query = query;
        //跳转之前做个判断，看看有没params参数，如果有就带上
        if (this.$route.params) {
          location.params = this.$route.params;
        }
        //跳转之前做个判断，如果是home往search页面就replace,否则才push
        if (this.$route.path !== "/home") {
          this.$router.replace(location);
        } else {
          this.$router.push(location);
        }
        // this.$router.push(location);
      }
    },
    moveOutDiv() {
      this.currentIndex = -1;
      if (this.$route.path !== "/home") {
        this.isShow = false;
      }
    },
  },

  //只要从vuex当中拿的是数据都要从component当中拿，如果从vuex当中拿的是方法都要从methods当中拿，只不过后者用的比较少
  computed: {
    //...mapstate中如果要写成数组，必须要满足1数据直接就是总的state中的数据，不能是模块state中的数据，2数组当中的名字必须和sate中的名字一致
    ...mapState({
      //可以写成函数。也可以简写
      // catgorylist: (state) => {
      //   state.home.catgorylist;
      // },
      //如果不是数据直接就是总的state中的数据，那么必须写成对象
      catgorylist: (state) => state.home.catgorylist,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      &.sort-enter {
        height: 0;
        opacity: 0;
      }
      &.sort-enter-to {
        height: 461px;
        opacity: 1;
      }
      &.sort-enter-active {
        transition: all 2s;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 615px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left !important;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: red;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>