Proxy node warnings

in the following example we will filter any warning that contains the word 'deprecated':
```typescript
import { proxyWarnings } from 'proxy-warnings'

proxyWarnings((emit, warning) => {
    if(typeof warning === 'string') {
        if(warning.includes('deprecated'))
            return
        
    } else {
        // if is not a string then is an 'Error'
        if(warning.message.includes('deprecated'))
            return
    }

    emit()
}) 
```