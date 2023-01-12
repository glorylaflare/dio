const acordeonTriggers = document.querySelectorAll('.acordeon .trigger')

acordeonTriggers.forEach((trigger) => {

    trigger.addEventListener('click', (e) => {
        const acordeon = trigger.parentElement
        const open = acordeon.classList.contains('acordeon-open')

        if (open) {
            acordeon.classList.remove('acordeon-open')
        } else {
            acordeon.classList.add('acordeon-open')
        }
    })
})