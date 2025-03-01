document.addEventListener('DOMContentLoaded', function() {
    const deliveryForm = document.getElementById('deliveryForm');
    const successMessage = document.getElementById('successMessage');

    deliveryForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
       
        
       
        successMessage.classList.remove('hidden');
        
        deliveryForm.reset();
        
        setTimeout(() => {
            successMessage.classList.add('hidden');
        }, 5000);
    });
});
