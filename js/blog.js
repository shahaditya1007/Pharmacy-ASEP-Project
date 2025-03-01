document.addEventListener('DOMContentLoaded', function () {
    function loadBlogContent(page) {
        const blogContent = document.getElementById('blog-content');
        blogContent.innerHTML = '';

        let content = '';

        if (page === 1) {
            content = `
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <img src="images/blog1.jpg" class="card-img-top" alt="Blog Image">
                            <div class="card-body">
                                <h2 class="h5">5 Tips for Healthy Living</h2>
                                <p>Discover practical ways to maintain a balanced lifestyle in today's fast-paced world...</p>
                                <p class="extra-content">
                                    1. Maintain a balanced diet rich in fruits and vegetables<br>
                                    2. Exercise at least 30 minutes daily<br>
                                    3. Get 7-8 hours of quality sleep<br>
                                    4. Stay hydrated with 8 glasses of water<br>
                                    5. Practice mindfulness and stress management<br><br>
                                    Following these tips can significantly improve your overall health and well-being. Remember to consult with healthcare professionals before making major lifestyle changes.
                                </p>
                                <a href="#" class="read-more text-primary fw-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <img src="images/blog2.jpg" class="card-img-top" alt="Blog Image">
                            <div class="card-body">
                                <h2 class="h5">Top Supplements for 2025</h2>
                                <p>Learn about the latest and most effective supplements...</p>
                                <p class="extra-content">Vitamins, minerals, and essential nutrients that will boost your immunity and energy.</p>
                                <a href="#" class="read-more text-primary fw-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <img src="images/blog3.jpg" class="card-img-top" alt="Blog Image">
                            <div class="card-body">
                                <h2 class="h5">Yoga and Mental Health</h2>
                                <p>Explore the connection between yoga practices and mental well-being...</p>
                                <p class="extra-content">Practicing yoga daily can significantly improve mood, stress levels, and overall health.</p>
                                <a href="#" class="read-more text-primary fw-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (page === 2) {
            content = `
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <img src="images/blog4.jpg" class="card-img-top" alt="Blog Image">
                            <div class="card-body">
                                <h2 class="h5">Understanding Herbal Medicine</h2>
                                <p>Discover the benefits and uses of various herbal medicines...</p>
                                <p class="extra-content">Herbal medicines have been used for centuries to treat various ailments. Learn about their benefits and how to use them safely.</p>
                                <a href="#" class="read-more text-primary fw-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <img src="images/blog5.jpg" class="card-img-top" alt="Blog Image">
                            <div class="card-body">
                                <h2 class="h5">The Importance of Hydration</h2>
                                <p>Learn why staying hydrated is crucial for your health...</p>
                                <p class="extra-content">Staying hydrated is essential for maintaining good health. Learn about the benefits of hydration and how to ensure you're drinking enough water.</p>
                                <a href="#" class="read-more text-primary fw-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <img src="images/blog6.jpg" class="card-img-top" alt="Blog Image">
                            <div class="card-body">
                                <h2 class="h5">Mental Health Awareness</h2>
                                <p>Understand the importance of mental health and how to take care of it...</p>
                                <p class="extra-content">Mental health is just as important as physical health. Learn about the signs of mental health issues and how to seek help.</p>
                                <a href="#" class="read-more text-primary fw-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        } else if (page === 3) {
            content = `
                <div class="row g-4">
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <img src="images/blog7.jpg" class="card-img-top" alt="Blog Image">
                            <div class="card-body">
                                <h2 class="h5">The Benefits of Regular Exercise</h2>
                                <p>Learn about the physical and mental benefits of regular exercise...</p>
                                <p class="extra-content">Regular exercise can improve your physical and mental health. Learn about the different types of exercise and how to incorporate them into your routine.</p>
                                <a href="#" class="read-more text-primary fw-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <img src="images/blog8.jpg" class="card-img-top" alt="Blog Image">
                            <div class="card-body">
                                <h2 class="h5">Healthy Eating Habits</h2>
                                <p>Discover tips for maintaining healthy eating habits...</p>
                                <p class="extra-content">Healthy eating is crucial for maintaining good health. Learn about the benefits of a balanced diet and how to make healthier food choices.</p>
                                <a href="#" class="read-more text-primary fw-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card shadow-sm">
                            <img src="images/blog9.jpg" class="card-img-top" alt="Blog Image">
                            <div class="card-body">
                                <h2 class="h5">Managing Stress Effectively</h2>
                                <p>Learn techniques for managing stress and improving your well-being...</p>
                                <p class="extra-content">Stress management is essential for maintaining good health. Learn about different techniques for managing stress and improving your overall well-being.</p>
                                <a href="#" class="read-more text-primary fw-bold">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        }

        blogContent.innerHTML = content;

        document.querySelectorAll('.read-more').forEach(button => {
            button.addEventListener('click', function (e) {
                e.preventDefault();
                const extraContent = this.previousElementSibling;
                if (extraContent) {
                    if (extraContent.style.display === 'none' || extraContent.style.display === '') {
                        extraContent.style.display = 'block';
                        extraContent.classList.add('show');
                        this.textContent = 'Read Less';
                    } else {
                        extraContent.style.display = 'none';
                        extraContent.classList.remove('show');
                        this.textContent = 'Read More';
                    }
                }
            });
        });
    }

    loadBlogContent(1);

    document.querySelectorAll('.page-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const page = parseInt(this.getAttribute('data-page'));
            loadBlogContent(page);
        });
    });

    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
