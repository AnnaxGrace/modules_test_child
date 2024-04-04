mock "tfplan/v2" {
  module {
    source = "created-tfplan.sentinel"
  }
}

policy "naming_convention" {
  source = "./naming_convention.sentinel"
  params = {
    "rg_regex"  = "rg-(dev|qa|uat|prd)-(cus|eus2)-[a-z]+-[a-z]+-\\d{3}$",
    "agw_regex" = "agw-(dev|qa|uat|prd)-(cus|eus2)-[a-z]+-\\d{3}$"
  }
}