import { readFile, writeFile } from 'fs/promises';

const resource_group_Object = {}

const planJSON = JSON.parse(
  await readFile(
    new URL('./plan.json', import.meta.url)
  )
);

for (let i = 0; i < planJSON.resource_changes.length; i++){
    if (planJSON.resource_changes[i].type === "azurerm_resource_group"){
        let newChange = {
            "address": planJSON.resource_changes[i].address,
            "change": {
                "actions": [
                    "create",
                ],
                "after": {
                    "location": "centralus",
                    "name":     planJSON.resource_changes[i].change.after.name,
                    "tags":     null,
                    "timeouts": null,
                },
                "after_unknown": {
                    "id": true,
                },
                "before": null,
            },
            "deposed":        "",
            "index":          null,
            "mode":           "managed",
            "module_address": "",
            "name":           planJSON.resource_changes[i].address.replace("azurerm_resource_group.",""),
            "provider_name":  "registry.terraform.io/hashicorp/azurerm",
            "type":           planJSON.resource_changes[i].type,
        }

        resource_group_Object[planJSON.resource_changes[i].address] = newChange
    }
}

writeFile( "created-tfplan.sentinel", `resource_changes = ${JSON.stringify(resource_group_Object)}`)
