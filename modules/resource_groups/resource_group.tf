resource "azurerm_resource_group" "test" {
  name     = var.app_name
  location = var.region == "cus" ? "Central US" : var.region == "eus2" ? "East US 2" : null
}