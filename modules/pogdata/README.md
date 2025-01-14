# PogData

## Difference
The difference between this and Chattriggers' PogData module is that this module handles saving data for you.<br>
So `save()` function is deprecated refrain from calling it though on early versions this might still work and only give you a notice in console.

## Usage
```js
const data = new PogObject("YourModuleNameHere", {
    mydata: false
})

register("command", () => {
    data.mydata = !data.mydata
}).setName("testdata")
```

You can also define the name of the file.
```js
const data = new PogObject("YourModuleNameHere", {
    mydata: false
}, "MyModuleData.json")
```