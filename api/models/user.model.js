import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
    },
    avtar:{
        type: String,
        default:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAACUCAMAAAAAoYNxAAAAMFBMVEXk5ueutLe/w8WrsbTn6erh4+TR1NbY29y4vcC1ur3d4OGorrGyt7rDx8nGyszV2Np5TGbeAAAEJ0lEQVR4nO2c0ZajIAxAFYIoIPz/3y5qtZ1ua4HQhNn1Pu3O0z05MRAI7bqLi4uLi4uLi4uLi4uLi/8BAFBhiASt4r+5dT4QZfUgnL3j5sGorllvAO1HKWX/SPyv8LrNYAOE0T357tZO6PacodPTK91DezSNSYMR9kR4cba+KWkY3FmIb9LT0JCz+Oi7SYtWnE1CiPdAG27ZFe0ShTfnBgKdYxydneJ2Bp2aFAfMzmByhfveseYzqClfWY6synN2WizOni81YPiw5L3BBi5nUCUxXlFcymOpspx5wgxDcZD7nmczqsZyYyk4jGEoN47OmkFZFWfyqjwyZIYuK3A7lr5ogMAEmado4IIctxrkxoUL3wPUbRUgKtwGeWaorI39S0baDxAC2rh3tCsgeLyypE1mbIlblT2lMXLpuynT7jNMQQP1F6TfH+SdBLzBkSpXKBg9bW9SR1lSng6gGpIDeyn/c8q/MJfrKNNWjBp1mfYApsrqN9Eqo3f49Cegv28nB76C8kCrjDoqukF8ZKvxxtQXaoAuGeQniWVXDj8gv35AHslFyM8+AWs8kZ/JlV7t7HBc8RRcUv6A4+YBtZqw3P0BamtE2l3fnRF1jnh/cVB+U0l96nlQXjQk341w4ckc1+XqginqpyT9NcmdwsMB1tHEoq0+87hcfqXjqm8PZHaBlvHTO8iKcwMx7jLzuZGxz9i7pknLVozXe4gUZzk1NHgNMH8MtKRv9s6BMJ5Ky160MKD6A+iCsO+kpRShxWcP0Gnx8vmAlaKNseUXAHSDmFwM6kHvJhHafKKxsz6G8bMYI0LMflhe8HBLfWR5ZKSUMUaprvkHR7se3Nn+1qL38pRLGR22nDiy2blxSY5BG7NmeivAmr9RddpMn+vb6j6ted2EdnQIftqqxPnit1WPgfdrjF+Z8e7t+vHaPBbpoHheEACYMGf67tb9vOQIuXCYxw+pcGYt3ZIilMKdx9879G6mkobO+JJ8eGFthSawBtCft8bp0vL7+QFG1BNepfvxu82Vmss/uffW35ukBJXaluZi5+90LLFV+o5wvwTa118UUxpSFGPtzzCx7cdgq54jAfjvhnhFVuzBIe/Yrdx5rFU6oMbkb6J0nakSgjS+Y2ucKIEmSONHZ7xxnbHfdOSMNa4y3JnnjJuGKXhljQeVz2BI83gHMUVAWN2eKN+PVhg5LKRwTakxcViInMqMDZtx8Y9/8An3ZQ+oIPHHUL5F/nhlpTnwcgoqHc1+84zMMENAz0diyX2pDac/9USDzWpSAD+Eiiev0OHf/1YhJ5ux85yVyCgaNR7TVkBmDACy7eCeSZ4ArPPMswLpUz0M3dNrpEjNDMW/8u0kK7dR4iI29YkBYsi3Msl7oxaWvhupC2ArX1/EpSmDt7IZUpVFOyQmBjREmnHr/AGofzwb9ZMWXQAAAABJRU5ErkJggg=='
    }
}, {timestamps: true});

const User = mongoose.model('User', userSchema);
export default User;