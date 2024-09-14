import { StyleSheet, Text, View, ListRenderItem, Dimensions } from 'react-native'
import React, { useState} from 'react'
import {useNavigation, useRoute} from '@react-navigation/native'
import {findProductById} from '../Services/product-service'
import { useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem, Tile } from '@rneui/base';

const DetailScreen = ():React.JSX.Element => {
    const route = useRoute<any>();
    const navigation = useNavigation<any>();
    const [detail,setDetail] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(false);

    React.useLayoutEffect(()=>{
        navigation.setOptions({
            headerTitle:route.params.title
        });
    },[navigation,route]);

    const getProductById = async () => {
        try{
          setLoading(true);
          const response = await findProductById(route.params.id);
          setDetail(response.data.data);
        } catch (error:any) {
          console.log(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      useFocusEffect(
        React.useCallback(()=> {
          getProductById();
        }, [])
      );

      const _renderItem: ListRenderItem<any> = ({ item }) => (
        <>
        <Tile
            imageSrc={{
                uri: 'https://th.bing.com/th/id/R.996743715604c91fa8112ded10c0199e?rik=9fLq6miZNfx2Ug&riu=http%3a%2f%2f3.bp.blogspot.com%2f-POLtYDrBGjc%2fTx6fsyg3dGI%2fAAAAAAAAAE8%2fdv2V-YL0VPQ%2fs1600%2fBestHDWallpapersPack475_24.jpg&ehk=jhCYc5Ipd8UdirFosQxbBKkPYRpEn6JzGSSWo8S2Q7A%3d&risl=&pid=ImgRaw&r=0',
                cache: 'force-cache',
        }}
                title={item.ch_title}
                titleStyle={styles.titleStyle}
                containerStyle={styles.tileContainer}
                caption={item.ch_dateadd}
                captionStyle={styles.captionStyle}
                featured
                activeOpacity={0.9}
                width={Dimensions.get('screen').width-20} // ลบขอบเล็กน้อยทั้งสองข้าง
            />
        </>
            );


  return (
    <View>
            <FlatList
              data={detail}
              keyExtractor={(item:any) => item.ch_id.toString()}
              renderItem={_renderItem}
              onRefresh={()=>{
                getProductById();
              }}
              refreshing={loading}
              contentContainerStyle={styles.listContent}
            />
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
        container: {
            backgroundColor: '#f0f0f0', // สีพื ้นหลัง
        },
        listContent: {
            paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
        },
        titleStyle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black', // สีขาวส าหรับชื่อ
        },
        tileContainer: {
            borderRadius: 10, //ก าหนดให้มุมของ container มีความโค้งมน
            overflow: 'hidden', //ก าหนดให้เนื ้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
            marginBottom: 10, //ก าหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู ่ด้านล่าง
            elevation: 5, // เงาส าหรับ Android
            shadowOffset: { width: 0, height: 2}, //ก าหนดต าแหน่งของเงาที่แสดงผล
            shadowOpacity: 0.25, //ก าหนดระดับความโปร่งแสงของเงา 
            shadowRadius: 3.84, //ก าหนดรัศมีของการกระจายตัวของเงา 
            opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
        },
        captionStyle: {
            fontSize: 14,
            color: 'black' // สีขาวส าหรับวันที่
        },
});