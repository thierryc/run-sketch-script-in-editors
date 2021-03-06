var onRun = function(context) {
  const sketch = require("sketch")
  const document = sketch.getSelectedDocument()
  const selection = document.selectedLayers.layers
  const Group = sketch.Group
  const Page = sketch.Page
  const Library = sketch.Library
  const libraries = Library.getLibraries()
  const Style = sketch.Style
  const SharedStyle = sketch.SharedStyle
  const Rectangle = sketch.Rectangle
  const Artboard = sketch.Artboard
  const Image = sketch.Image
  const Shape = sketch.Shape
  const ShapePath = sketch.ShapePath
  const Text = sketch.Text
  const SymbolMaster = sketch.SymbolMaster
  const SymbolInstance = sketch.SymbolInstance
  const Settings = sketch.Settings
  const UI = sketch.UI
  UI.message('Runing Sketch Scripts 👍')
  
  // Custom scripts will be added to here
  
};