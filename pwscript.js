 const correctPassword = "jagg84"; // Change this to your desired password

        function checkPassword() {
            const passwordInput = document.getElementById('passwordInput');
            const loginForm = document.getElementById('loginForm');
            const content = document.getElementById('content');
            const errorText = document.getElementById('errorText');

            if (passwordInput.value === correctPassword) {
                loginForm.style.display = 'none';
                content.style.display = 'block';
                errorText.style.display = 'none';
                // Store in sessionStorage to maintain access after page refresh
                sessionStorage.setItem('isAuthenticated', 'true');
            } else {
                errorText.style.display = 'block';
                passwordInput.value = '';
            }
        }

        function logout() {
            const loginForm = document.getElementById('loginForm');
            const content = document.getElementById('content');
            
            loginForm.style.display = 'block';
            content.style.display = 'none';
            document.getElementById('passwordInput').value = '';
            // Clear authentication status
            sessionStorage.removeItem('isAuthenticated');
        }

        // Check if user was previously authenticated
        window.onload = function() {
            if (sessionStorage.getItem('isAuthenticated') === 'true') {
                document.getElementById('loginForm').style.display = 'none';
                document.getElementById('content').style.display = 'block';
            }
        }

        // Add enter key support
        document.getElementById('passwordInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                checkPassword();
            }
        });