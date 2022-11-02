const spaceship = {
    name: 'X-wing',
    speed: 0
}

async function accelerate(spaceship: { name: string; speed: number }, newSpeed: number): Promise<void> {
    spaceship.speed = newSpeed
}

accelerate(spaceship, 50)