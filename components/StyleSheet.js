import * as React from 'react';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :'#e8eaed'
  },
  wrapper: {
    paddingTop:80,
    paddingHorizontal : 20,
  },
  judul: {
    fontSize : 28,
    fontWeight :'400',
    color :'#24252A',
    fontFamily :'Montserrat'
  },
  judul2: {
    fontSize : 42,
    fontWeight :'bold',
    color :'#FFA903',
    fontFamily :'Montserrat'
  },
  items: {
    marginTop :20,
  },
  keyboard :{
    bottom : 60,
    position :'absolute',
    width :'100%',
    flexDirection :'row',
    justifyContent :'space-around',
    alignItems :'center',

  },
  input:{
    paddingVertical :15,
    paddingHorizontal :15,
    width :250,
    backgroundColor :'#fff',
    borderRadius : 40, 
    borderColor : '#FFA903',
    borderWidth : 1,
    
  },
  lingkaran :{
    width: 50,
    height :50,
    backgroundColor : '#fff',
    borderRadius : 25,
    flexDirection : 'row',
    alignContent :'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor : '#FFA903',
    borderWidth : 1,
  },
  item :{
    backgroundColor :'#FFA903',
    padding :15,
    borderRadius :10,
    alignItems :'center',
    justifyContent :'space-between',
    flexDirection :'row',
    marginBottom :20,
  },
  itemLeft :{
    flexDirection : 'row',
    alignItems :'center',
    flexWrap : 'wrap',
  },
  kotak :{
    width :24,
    height : 24,
    backgroundColor : '#ffffff',
    borderRadius :5,
    marginRight : 10
  },
  itemText :{
    maxWidth :'80%',
    fontFamily :'Montserrat'
  },
  
});