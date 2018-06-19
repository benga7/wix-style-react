# How to migrate to new icons

First of all, some names are changed and some icons are deprecated, so please visit http://electric-process.surge.sh/ and find new icon name, if your icon is deprecated - ask your UX/UI person to provide alternative from available icons.

Now you have two choices:
1) Do migration by hands based on mapping
2) run our migration script
```
  npx migrate-to-icons-v2
```
such command will migrate all .js files inside src/ folder to new icons,
if you want to migrate icons in different folder, you can use --path param
```
  npx migrate-to-icons-v2 --path stories/
```

# Motivation

* current icons do not have standard sizes
* a lot of current icons are broken
* it is tricky to import and to use current icons

# How to use new icons?

Example 1
```
  import Add from 'wix-style-react/new-icons/Add';

  export default () => (
    <div>
      <Add />
    </div>
  )
```

Example 2
> Warning: till WSR migrate to yoshi@2.0.0, such code will add all icons to the bundle

```
  import {Add} from 'wix-style-react/new-icons';

  export default () => (
    <div>
      <Add size="3em"/>
    </div>
  )
```

Note: Icon accept size prop, which will be used as width and height for Icon.

