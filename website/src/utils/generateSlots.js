export function generateSlots(start,end,slotTime){

    const slots = []
    
    let current = new Date(`2024-01-01 ${start}`)
    const endTime = new Date(`2024-01-01 ${end}`)
    
    while(current < endTime){
    
    let hours = current.getHours().toString().padStart(2,"0")
    let minutes = current.getMinutes().toString().padStart(2,"0")
    
    slots.push(`${hours}:${minutes}`)
    
    current.setMinutes(current.getMinutes() + Number(slotTime))
    
    }
    
    return slots
    
    }