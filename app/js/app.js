document.addEventListener('DOMContentLoaded', () => {
	const headerSticky = () => {
		const wrapper = document.querySelector('body')
		const navbar = document.querySelector('.navbar')
		wrapper.addEventListener('scroll', () => (wrapper.scrollTop >= 200 ? navbar.classList.add('sticky') : navbar.classList.remove('sticky')))
	}
	headerSticky()
})
