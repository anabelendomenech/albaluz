document.addEventListener('DOMContentLoaded', function() {
    const fechaEventoInput = document.getElementById('fecha-evento');
    const fechaCitaSelect = document.getElementById('fecha-cita');
    const errorMessageDiv = document.getElementById('error-message');
    
    fechaEventoInput.addEventListener('change', function() {
        fechaCitaSelect.innerHTML = '';
        errorMessageDiv.textContent = '';
        
        const fechaEvento = new Date(fechaEventoInput.value);
        const hoy = new Date();
        const diffTime = Math.abs(fechaEvento - hoy);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        
        if (diffDays > 31) {
            errorMessageDiv.textContent = 'No puedes agendar con más de 31 días de anticipación.';
            return;
        }
        
        for (let i = 0; i < diffDays; i++) {
            const fechaDisponible = new Date(hoy);
            fechaDisponible.setDate(hoy.getDate() + i);
            const option = document.createElement('option');
            option.value = fechaDisponible.toISOString().split('T')[0];
            option.textContent = fechaDisponible.toLocaleDateString();
            fechaCitaSelect.appendChild(option);
        }
    });
    
    document.getElementById('form-agendar').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('¡Cita agendada exitosamente!');
        // Aquí podrías enviar los datos a un servidor o hacer otras acciones
    });
});
