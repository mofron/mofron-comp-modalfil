# mofron-comp-modalfil
[mofron](https://mofron.github.io/mofron/) is module based frontend framework.

modal filter component for mofron

apply a dim filter to the entire screen as when displaying a modal window

## Feature
 - modal windows can be easily implemented by adding child components to this component
 - it is possible to make the back look like frosted glass (blur)
## Attention
 - default visible is false
 - this component must be positioned to root for enabling the "blur" function
 - other components that are the same hierarchy from this component are added [mofron-effect-blur](https://github.com/mofron/mofron-effect-blur.git).

# Install
```
npm install mofron mofron-comp-modalfil
```

# Sample
```html
<require>
    <tag load="mofron-comp-text">Text</tag>
    <tag load="mofron-comp-modalfil">Mdlfil</tag>
</require>

<script run=after>
    mfil.visible(true);
</script>

<Text>Modal Filter</Text>
<Mdlfil name=mfil blur=(0.1rem,2000)><Mdlfil>
```

# Parameter

| Short<br>Form | Parameter Name | Type | Description |
|:-------------:|:---------------|:-----|:------------|
| | mainColor | mixed (color) | string: background color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | key-value | style option |
| | baseColor | mixed (color) | string: background color name, #hex |
| | | | array: [red, green, blue, (alpha)] |
| | | key-value | style option |
| ◯  | blur | string (size) | blur value |
| | | number | blur speed (ms) |
| | speed | number | blur speed (ms) |

