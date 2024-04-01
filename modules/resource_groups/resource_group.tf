resource "azurerm_resource_group" "test" {
  name     = var.app_name
  location = "Central US"
}