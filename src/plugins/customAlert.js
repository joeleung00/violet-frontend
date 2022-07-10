import Swal from 'sweetalert2/dist/sweetalert2.all.min.js'

const customAlert = {
    install(app, options){
        app.config.globalProperties.$myConfirm = (title, text) => Swal.fire(
            {
                title,
                text,
                showDenyButton: true,
                denyButtonText: 'No',
                showConfirmButton: true,
                confirmButtonText: 'Yes',
                imageUrl: '/images/questionIcon.svg',
                imageWidth: 100,
                imageHeight: 100,
                imageAlt: 'question icon',
            }
        ),
        
        app.config.globalProperties.$myAlert = (title) => Swal.fire(title)
    }
}

export default customAlert