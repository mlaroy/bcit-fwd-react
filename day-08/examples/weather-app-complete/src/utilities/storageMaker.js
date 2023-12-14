import { STORAGE_CURRENT_CITY, STORAGE_YOUR_CITIES } from '../globals/variables';

export const getStorage = (storageItem = STORAGE_YOUR_CITIES) => {
    
    let itemFromStorage = localStorage.getItem(storageItem);
    
    if(itemFromStorage !== null){
        itemFromStorage = JSON.parse(itemFromStorage);
        return itemFromStorage;
    }else if(storageItem === STORAGE_YOUR_CITIES){
        localStorage.setItem(storageItem, JSON.stringify([]));
        return [];
    }else if(storageItem === STORAGE_CURRENT_CITY){
        return false;
    } 

}

export const removeItemFromStorage = (city, storageItem = STORAGE_YOUR_CITIES) => {
    
    let itemsFromStorage = getStorage(storageItem);
    const isCity = (currentItem) => currentItem.city === city;
    let indexOfItemToRemove = itemsFromStorage.findIndex(isCity);
    itemsFromStorage.splice(indexOfItemToRemove, 1);
    let itemsForStorage = JSON.stringify(itemsFromStorage);
    localStorage.setItem(storageItem, itemsForStorage);
    
    return itemsFromStorage;

}

export const addItemToStorage = (cityObj, storageItem = STORAGE_YOUR_CITIES) => {
    
    const itemsFromStorage = getStorage(storageItem);
   
    if(storageItem === STORAGE_YOUR_CITIES){
        itemsFromStorage.push(cityObj);
        const updatedItemsForStorage = JSON.stringify(itemsFromStorage);
        localStorage.setItem(storageItem, updatedItemsForStorage);
        return itemsFromStorage;
    }else if(storageItem === STORAGE_CURRENT_CITY){
        const itemForStorage = JSON.stringify(cityObj);
        localStorage.setItem(storageItem, itemForStorage);
        return cityObj;
    }

}

export const isItemInStorage = (city) => {

    let yourCurrentCities = getStorage();
    
    if(yourCurrentCities.length < 1){
        return false;
    }

    if(yourCurrentCities.find(currentCity => currentCity.city === city)){
        return true;
    }else{
        return false;
    }

}