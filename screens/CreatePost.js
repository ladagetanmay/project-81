import React, { Component } from "react";
import { Text, View, Image, StyleSheet, SafeAreaView, Platform, StatusBar, Dimensions,ScrollView, } from "react-native";

import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { RFValue } from "react-native-responsive-fontsize";
import * as SplashScreen from 'expo-splash-screen';
import DropDownPicker from "react-native-dropdown-picker";
SplashScreen.preventAutoHideAsync();

let customFonts = {
	"Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class CreateStory extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fontsLoaded: false,
			previewImage:"image_1",
			dropdownHeight:40
		};
	}

	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		this.setState({ fontsLoaded: true });
	}

	componentDidMount() {
		this._loadFontsAsync();
	}

	render() {
		if (this.state.fontsLoaded) {
			SplashScreen.hideAsync();
			let preview_images={
				image_1: require("../assets/story_image_1.png"),
				image_2: require("../assets/story_image_2.png"),
				image_3: require("../assets/story_image_3.png"),
				image_4: require("../assets/story_image_4.png"),
				image_5: require("../assets/story_image_5.png"),
			}
			console.log(this.state.previewImage)
			return(
			<View style={styles.container}>
				<SafeAreaView style={styles.droidSafeArea} />
				<View style={styles.appTitle}>
					<View style={styles.appIcon}>
						<Image
							source={require("../assets/logo.png")}
							style={styles.iconImage}
						></Image>
					</View>
					<View style={{ height: RFValue(this.state.dropdownHeight)}}>
						<DropDownPicker
						items={[
							{lable: "Image_1", value:"image_1"},
							{lable: "Image_2", value:"image_2"},
							{lable: "Image_3", value:"image_3"},
							{lable: "Image_4", value:"image_4"},
							{lable: "Image_5", value:"image_5"},
						]}
						defaultValue={this.state.previewImage}
						open={this.state.dropdownHeight == 170 ? true: false}
						onOpen={()=>{
							this.setState({dropdownHeight:170});
						}}
						onClose={()=>{
							this.setState({dropdownHeight:40});
						}}
						style={{
							backgroundColor: "transparent",
							brorderWidth:1,
							borderColor:"white"
						}}
						textStyle={{
							color: this.state.dropdownHeight == 170 ? "black" : "white",
							fontFamily: "Bubblegum-Sans",
						}}
						onSelectItem={(item)=>{
							this.setState({previewImage: item.value})
						}}
						/>
					</View>
					<ScrollView>
						<TextInput
						style={styles.inputFont}
						onChnageText={(title)=> this.setState({title})}
						placeholder={"Title"}
						placeholderTextColor="white"
						/>
						<TextInput
						   style={[
							styles.inputFont,
							styles.inputFontExtra,
							styles.inputTextBig,
						  ]}
						onChnageText={(descriptiod)=> this.setState({description})}
						placeholder={"description"}
						placeholderTextColor="white"
						multiline={true}
						numberOfLines={4}
						/>
							<TextInput
						   style={[
							styles.inputFont,
							styles.inputFontExtra,
							styles.inputTextBig,
						  ]}
						onChnageText={(story)=> this.setState({story})}
						placeholder={"story"}
						placeholderTextColor="white"
						multiline={true}
                		numberOfLines={20}
						/>
							<TextInput
						   style={[
							styles.inputFont,
							styles.inputFontExtra,
							styles.inputTextBig,
						  ]}
						onChnageText={(moral)=> this.setState({moral})}
						placeholder={"moral"}
						placeholderTextColor="white"
						multiline={true}
						numberOfLines={4}
						/>
					</ScrollView>
					<View style={styles.appTitleTextContainer}>
						<Text style={styles.appTitleText}>New Story</Text>
					</View>
				</View>
			</View>)
		}
	}
}

const styles = StyleSheet.create({
	container: {
	  flex: 1,
	  backgroundColor: "#15193c",
	},
	droidSafeArea: {
	  marginTop:
		Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35),
	},
	appTitle: {
	  flex: 0.07,
	  flexDirection: "row",
	},
	appIcon: {
	  flex: 0.3,
	  justifyContent: "center",
	  alignItems: "center",
	},
	iconImage: {
	  width: "100%",
	  height: "100%",
	  resizeMode: "contain",
	},
	appTitleTextContainer: {
	  flex: 0.7,
	  justifyContent: "center",
	},
	appTitleText: {
	  color: "white",
	  fontSize: RFValue(28),
	  fontFamily: "Bubblegum-Sans",
	},
	fieldsContainer: {
	  flex: 0.85,
	},
	previewImage: {
	  width: "93%",
	  height: RFValue(250),
	  alignSelf: "center",
	  borderRadius: RFValue(10),
	  marginVertical: RFValue(10),
	  resizeMode: "contain",
	},
	inputFont: {
	  height: RFValue(40),
	  borderColor: "white",
	  borderWidth: RFValue(1),
	  borderRadius: RFValue(10),
	  paddingLeft: RFValue(10),
	  color: "white",
	  marginTop: RFValue(10),
	  fontFamily: "Bubblegum-Sans",
	},
	inputFontExtra: {
	  marginTop: RFValue(15),
	},
	inputTextBig: {
	  textAlignVertical: "top",
	  padding: RFValue(5),
	},
  });