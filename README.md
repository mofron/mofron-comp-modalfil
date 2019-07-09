# mofron-comp-modalfil
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

modal filter component for mofron

apply a dim filter to the entire screen as when displaying a modal window

## Feature
 - modal windows can be easily implemented by adding child components to this component
 - it is possible to make the back look like frosted glass (blur)
## Attention
 - default visible() is false
 - this comp must be positioned to root for enabling the "blur" function

# Install
```
npm install mofron mofron-comp-modalfil
```

# Sample
```html
<require>
    <tag module="mofron-comp-text">Text</tag>
    <tag module="mofron-comp-modalfil">Mdlfil</tag>
</require>

<script>
mfil.visible(true);
</script>

<Text>Modal Filter</Text>
<Mdlfil name=mfil blur="0.01rem"><Mdlfil>
```
# Parameter

|Simple<br>Param | Parameter Name | Type | Description |
|:--------------:|:---------------|:-----|:------------|
| | mainColor | string(color)/array(r,g,b) | backgrond color |
| | baseColor | string(color)/array(r,g,b) | backgrond color |
| | blur | string (size) | blur value |

