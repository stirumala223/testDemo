import { LightningElement, api } from "lwc";
import pepsi from '@salesforce/resourceUrl/Pepsi';
import coke from "@salesforce/resourceUrl/Coke";
import kurkure from "@salesforce/resourceUrl/Kurkure";
import lays from "@salesforce/resourceUrl/Lays";
import dairymilk from "@salesforce/resourceUrl/DairyMilk";
import kitkat from "@salesforce/resourceUrl/kitkat";
import wholebread from "@salesforce/resourceUrl/Wholewheatbread";
import whitebread from "@salesforce/resourceUrl/Whitebread";


export default class ProductsList extends LightningElement {
	@api products = [
		{
			Id: 1,
			ImageUrl__c:"https://stirumala-221202-362-demo.my.salesforce.com/resource/1678014314000/Lays?",
			productName: "Lays",
			Display_Price__c: 100,
			Quantity: 1,
			ProductCode:"LC1",
			Name: "Lays Chips"
		},
		{
			Id: 2,
			ImageUrl__c:
				"https://stirumala-221202-362-demo.my.salesforce.com/resource/1678014529000/Kurkure?",
			productName: "Kurkure",
			Display_Price__c: 100,
			Quantity: 1,
			ProductCode:"KR1",
			Name: "Kurkure"
		},
		{
			Id: 3,
			ImageUrl__c:
				"https://stirumala-221202-362-demo.my.salesforce.com/resource/1678014546000/Coke?",
			productName: "Coke",
			Display_Price__c: 100,
			Quantity: 1,
			ProductCode:"CK1",
			Name: "Coke"
		},
		{
			Id: 4,
			ImageUrl__c:
				"https://stirumala-221202-362-demo.my.salesforce.com/resource/1678014561000/Pepsi?",
			productName: "Pepsi",
			Display_Price__c: 100,
			ProductCode:"PS1",
			Quantity: 1,
			Name: "Pepsi"
		},
		{
			Id: 5,
			ImageUrl__c:
				"https://stirumala-221202-362-demo.my.salesforce.com/resource/1678192978000/Whitebread?",
			productName: "WhiteBread",
			Display_Price__c: 40,
			Quantity: 1,
			ProductCode:"WB1",
			Name: "White Bread"
		},
		{
			Id: 6,
			ImageUrl__c:
				"https://stirumala-221202-362-demo.my.salesforce.com/resource/1678209268000/Wholewheatbread?",
			productName: "WholeWheatBread",
			Display_Price__c: 70,
			Quantity: 1,
			ProductCode:"WB",
			Name: "Whole Wheat Bread"
		},
		{
			Id: 7,
			ImageUrl__c:
				"https://stirumala-221202-362-demo.my.salesforce.com/resource/1678192243000/DairyMilk?",
			productName: "DairyMilk",
			Display_Price__c: 60,
			Quantity: 1,
			ProductCode:"DM1",
			Name: "Dairy Milk"
		},
		{
			Id: 8,
			ImageUrl__c:
				"https://stirumala-221202-362-demo.my.salesforce.com/resource/1678192216000/kitkat?",
			productName: "Kitkat",
			Display_Price__c: 50,
			Quantity: 1,
			ProductCode:"KT1",
			Name: "KitKat"
		},
	];
}