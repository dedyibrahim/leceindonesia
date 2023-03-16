<template>
    <div class="login-register-area py-140">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <form>
                        <div class="login-form">
                            <h4 class="login-title">Login</h4>
                            <div class="row">
                                <div class="col-12">
                                    <label>Email Address*</label>
                                    <input type="email" placeholder="Email Address">
                                </div>
                                <div class="col-12">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password">
                                </div>
                                <div class="col-12">
                                    <div class="login-action">
                                        <div class="check-box">
                                            <input class="checkbox me-2" type="checkbox" id="remember_me">
                                            <label for="remember_me">Remember me</label>
                                        </div>
                                        <div class="forgotton-password_info">
                                            <a href="#"> Forgot password?</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12 mt-2">
                                    <button class="btn btn-primary btn-secondary-hover">Login</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-6 mt-40 mt-lg-0">
                    <form>
                        <div class="register-form">
                            <h4 class="login-title">Register</h4>
                            <div class="row">
                                <div class="col-md-6 col-12">
                                    <label>First Name</label>
                                    <input type="text" placeholder="First Name">
                                </div>
                                <div class="col-md-6 col-12">
                                    <label>Last Name</label>
                                    <input type="text" placeholder="Last Name">
                                </div>
                                <div class="col-md-12">
                                    <label>Email Address*</label>
                                    <input type="email" placeholder="Email Address">
                                </div>
                                <div class="col-md-6">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password">
                                </div>
                                <div class="col-md-6">
                                    <label>Confirm Password</label>
                                    <input type="password" placeholder="Confirm Password">
                                </div>
                                <div class="col-12 mt-3">
                                    <button class="btn btn-primary btn-secondary-hover">Register</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    };
</script>