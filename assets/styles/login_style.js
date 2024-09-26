import styled from 'styled-components/native';
import { useFonts } from 'expo-font';
import { Link } from 'expo-router';


export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: left;
  padding: 50px;
  background: #7D7D7D;
`;

export const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align:center;
  fontFamily: 'britannic';
  
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 7px;
  margin-bottom: 10px;
`;

export const ErrorText = styled.Text`
  color: red;
  margin-bottom: 1px;
  font-size:10px;
`;

export const FormText = styled.Text`
  text-align:'left';
  font-size:15px;
  fontFamily:century;
  margin:5px;
`;

export const Buttonsx = styled.TouchableOpacity`
  color: 'red';
  margin-top: 10px;
  border-radius:5px;
  width:80px;
  height:30px;
  display:'flex';
  text-align:justify;
  text-align-last:center;
  align-self:center;
  text-margin-top:5px;
  border: 1px solid #ccc;

`;

export const MainImg = styled.Image`
  height:150;
  width:150;
  display:'flex';
  align-self:center;
  margin-bottom:35px;
  border-radius:10px;
`;  

export const ButtonText = styled.Text`
  text-align:'center';
  font-size:15px;
  margin-top:6px;
  fontFamily:'britannic';

`

export const ExtraTexts = styled.Text`
  text-align:center;
  font-size:12px;
  margin-top:10px;
`;
