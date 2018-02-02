/**
 *  Class: TabBarNavigation
 *  Author: xyl
 *  Date: 2018/2/2.
 *  Description:
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView
} from 'react-native';
import Common from '../Utility/CommonProperty';
import {
    TabRouter,
    createNavigationContainer,
    addNavigationHelpers,
    createNavigator
} from 'react-navigation';
import HomePage from "../Pages/Home/HomePage";
import CategoryPage from "../Pages/Category/CategoryPage";
import TryOnPage from "../Pages/TryOn/TryOnPage";
import CartPage from "../Pages/Cart/CartPage";
import MinePage from "../Pages/Mine/MinePage";
let ImageName = [
    require('../Img/icon_home.png'),
    require('../Img/icon_catalog.png'),
    require('../Img/icon_try_on.png'),
    require('../Img/icon_cart.png'),
    require('../Img/icon_my.png'),
];
let TitleName = [
    '首页',
    '分类',
    '试戴',
    '购物车',
    '我的',
];


//创建Tabbar 路由
const TabBarRouter = TabRouter(
    {
    Home:{screen:HomePage},
    Category:{screen:CategoryPage},
    TryOn:{screen:TryOnPage},
    Cart:{screen:CartPage},
    Mine:{screen:MinePage}
    },
    {
        initialRouteName:'Home',
    }
)
const TabBar = ({navigation})=>{
    //获取当前导航路由
    const {routes} = navigation.state;
    console.log(routes.length);
    //获取当前选中的item 下biao
    let selectedIndex = navigation.state.index;
    //记录选中状态
    let isSelected = false;

    showTitle = (index,color)=>{
        if (index !== 2){
            return (
                <Text style={{fontSize:10,color:color}}>
                    {TitleName[index]}
                </Text>
            )
        }
   }

    return(
        <View style={styles.TabBarStyle}>
            {
                routes.map((route,index)=>{
                    console.log(index);
                    //判断当前item 是否选中
                    (selectedIndex === index)?isSelected = true : isSelected = false;
                    let tintColor = isSelected ? Common.DEFAULT_GREEN :Common.DEFAULT_GRAY;
                    //根据 index 修改样式
                    let itemImageStyle;
                    if (index === 2){
                        itemImageStyle = [{width:60,height:60,marginTop:-25}];
                    }else {
                        itemImageStyle = [styles.itemImageStyle,{tintColor:tintColor}];
                    }
                    return (
                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={()=>navigation.navigate(route.routeName)}
                            style={styles.itemStyle}
                            key = {index}
                        >
                            <Image
                                source={ImageName[index]}
                                style={[itemImageStyle]}
                                resizeMode={'contain'}
                            />
                            {this.showTitle(index,tintColor)}
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )

}
//TabbarItem 选中后 对应的 组件
const TabBarView = ({router,navigation})=>{
    const {routes,index} = navigation.state;
    const ActivityScreen = router.getComponentForState(navigation.state);
    return (
        <SafeAreaView style={{flex:1,alignItems:'center'}}>
            <ActivityScreen
                navigation = {
                    addNavigationHelpers({
                        ...navigation,
                        state:routes[index],
                    })
                }
            />
            <TabBar
                navigation = {navigation}
            />
        </SafeAreaView>
    )
}

export default Tabs = createNavigationContainer(
  createNavigator(TabBarRouter)(TabBarView)
);


const styles = StyleSheet.create({
    TabBarStyle:{
        width:Common.WIDTH,
        height:49,
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'white'

    },
    itemImageStyle:{
        width:20,
        height:20,
        marginBottom:6
    },
    itemStyle:{
        justifyContent:'center',
        alignItems:'center',
        flex:1,
    }

})