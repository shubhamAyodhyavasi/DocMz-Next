import withDashboardLayout from '../../../components/layouts/dashboard-layout/withDashboardLayout'
import React, { Component } from 'react'

class dashboard extends Component {
    render() {
        return (
            <div>
                this is a dashboard
            </div>
        )
    }
}

export default withDashboardLayout(dashboard)