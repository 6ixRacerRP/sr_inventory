local toggle_inventory_key = 288

Citizen.CreateThread(function() 
    while true do
        Citizen.Wait(1)
        if IsControlJustReleased(1, toggle_inventory_key) then
            print("control was pressed!")
            SetNuiFocus(true, true)
            SendNUIMessage({
                ui = "inventory",
                status = true
            })
        end
    end
end)

RegisterNUICallback('NUIFocusOff', function()
    SetNuiFocus(false, false)
end)