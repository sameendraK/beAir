// Middleware to check user role
const checkRole = (requiredRole) => {
    return (req, res, next) => {
        const userRole = req.user?.role;
        
        if (!userRole) {
            return res.status(401).json({ message: 'Unauthorized: No user role found' });
        }
        
        if (userRole !== requiredRole && userRole !== 'admin') {
            return res.status(403).json({ message: 'Forbidden: Insufficient permissions' });
        }
        
        next();
    };
};

// Middleware to check if user is admin
const isAdmin = (req, res, next) => {
    const userRole = req.user?.role;
    
    if (userRole !== 'admin') {
        return res.status(403).json({ message: 'Forbidden: Admin access required' });
    }
    
    next();
};

// Middleware to check if user is authenticated
const isAuthenticated = (req, res, next) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized: Please login first' });
    }
    
    next();
};

module.exports = { checkRole, isAdmin, isAuthenticated };
