mock "tfplan/v2" {
  module {
    source = "created-tfplan.sentinel"
  }
}

param "rg_regex" {
  value = "rg-(dev|qa|uat|prd)-(cus|eus2)-[a-z]+-[a-z]+-\\d{3}$"
}

param "agw_regex" {
  value = "agw-(dev|qa|uat|prd)-(cus|eus2)-[a-z]+-\\d{3}$"
}
