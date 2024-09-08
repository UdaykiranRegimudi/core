import * as Components from "./components"
import { extendCatalogue } from "./fiber/catalogue"
import { SilkscreenPath } from "./components/primitive-components/SilkscreenPath"

// Register all components, generally you don't need to manually
// register a component, as long as it's exported from lib/components
// it'll automatically be registered!
extendCatalogue(Components)
extendCatalogue({
  ...Components,
  SilkscreenPath,
})

// Aliases (only when class name is different than the name of the component)
extendCatalogue({
  Bug: Components.Chip,
})
