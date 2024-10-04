## Usage

```ts
import { Logger } from "@myncraftjs/logger";
const { Logger } = require("@myncraftjs/logger");

const logger = new Logger({ header: "HEADER" });
logger.log("Hello");
logger.error("This is a logger");
logger.warn("Would you like to download this logger?");
```

<img src="https://github.com/MynCraft/logger/blob/main/assets/usage.png?raw=true"/>

### Options

```ts
new Logger({
  time: boolean, // Show time text
  date: boolean, // Show date text
  locale: string, // For time and date text format. Default is your system locale
  header: string, // Header text
});
```
