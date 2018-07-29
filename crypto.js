import React from 'react';
import { FlatList, ActivityIndicator,ScrollView,StyleSheet,Image, Text, View  } from 'react-native';
import { Header,Avatar} from 'react-native-elements';

 class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,name:'',symbol:'',price:'',percent_change_1h:'',percent_change_24h:'',percent_change_7d:''}
  }

  componentDidMount(){
    return fetch('https://api.coinmarketcap.com/v2/ticker/?limit=10')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          symbol: responseJson['data'][this.props.id]['symbol'],
          name: responseJson['data'][this.props.id]['name'],
          price: responseJson['data'][this.props.id]['quotes']['USD']['price'],
          percent_change_1h: responseJson['data'][this.props.id]['quotes']['USD']['percent_change_1h'],
          percent_change_24h: responseJson['data'][this.props.id]['quotes']['USD']['percent_change_24h'],
          percent_change_7d: responseJson['data'][this.props.id]['quotes']['USD']['percent_change_7d'],
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={styles.container} >
     <View style={styles.head}> 
     <View style={{width:50}}><Image
          style={{width: 40, height: 40}}
          source={{uri: this.props.uri}}
        /></View>
        <Text style={{width:65 ,fontSize:15}}> {this.state.symbol} | </Text>
       <Text style={{width:120 ,fontWeight:'bold',fontSize:15}}> {this.state.name}</Text>
       <Text style={{width:100 ,fontWeight:'bold',fontSize:15}}>$ {this.state.price}</Text></View>
       <View style={styles.data} >
       <Text style={{width:120 }}> 1h: <Text style={{color:'red'}}>{this.state.percent_change_1h}%</Text></Text>
       <Text style={{width:120 }}> 24h :<Text style={{color:'red'}}>{this.state.percent_change_24h}%</Text></Text>
       <Text style={{width:120 }}> 7d :<Text style={{color:'red'}}>{this.state.percent_change_7d}%</Text></Text>
       </View>
      </View>
    );
  }
}

export default class asdf extends React.Component {
  render(){
    return ( 
      <ScrollView>
       <View style={styles.headerContainer}><Text style={styles.header}>Cryptocurrency App</Text></View>
        <View style={{height:150}}>
          <FetchExample id='1' uri="https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609483/bitcoin_eqld4v.png" />
        </View>
        <View style={{height:150}}>
          <FetchExample id='1027' uri="https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609485/ethereum_nw0chu.png"/>
        </View>
        <View style={{height:150}}>
        
          <FetchExample id='52' uri= "https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/ripple_p0xeut.png"/>
        </View>
        <View style={{height:150}}>
       
          <FetchExample id='1831' uri="https://res.cloudinary.com/da7jhtpgh/image/upload/v1516327336/bch_2x_hahroi.png" />
        </View>
        <View style={{height:150}}>
        
          <FetchExample id='1765' uri="https://res.cloudinary.com/da7jhtpgh/image/upload/v1516326878/eos_2x_dvr7p0.png" />
        </View>
        <View style={{height:150}}>
       
          <FetchExample id='2' uri="https://res.cloudinary.com/da7jhtpgh/image/upload/v1512427497/ltc_fjbqjf.png" />
        </View>
        <View style={{height:150}}>
        
          <FetchExample id='512' uri="https://res.cloudinary.com/da7jhtpgh/image/upload/v1516326886/xlm_2x_jfwlwt.png" />
        </View>
        <View style={{height:150}}>
        
          <FetchExample id='2010' uri="https://res.cloudinary.com/da7jhtpgh/image/upload/v1516326874/ada_2x_g4fs0c.png" />
        </View>
        <View style={{height:150}}>
        
          <FetchExample id='1720' uri="https://res.cloudinary.com/da7jhtpgh/image/upload/v1516327102/miota_2x_zsvtqc.png" />
        </View>
        <View style={{height:150}}>
        
          <FetchExample id='825' uri="https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/monero_wzk3ur.png" />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create ({
  headerContainer:{
    display:'flex',
    marginTop:56,
    alignItems:'center',
    paddingBottom:20,
    borderBottomWidth:1,
    borderBottomColor:'lightgray'
  },
  header:{
    fontWeight:'bold',
    fontSize:20
  },
  container : {
    padding:20,
    paddingTop:35,
    flex:1,
    flexDirection:'column',
    borderBottomWidth:1,
    borderBottomColor:'lightgray'
  },
  head : {
    flex:1,
    flexDirection :'row',
    width:300,
    
  },
  data: {
    flex: 1,
    flexDirection:'row',
    width:300,
    
  }
});
