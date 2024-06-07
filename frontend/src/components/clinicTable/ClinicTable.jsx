import './clinicTable.css'
import Menu from '../clinicScheludeMenu/Menu'

export default function ClinicTable({handleMenuItem, showMenu, scheludes, handleOpenMenu}) {
    return (
        <div className="clinic-table">
            <span className="clinic-title">Turnos del día:</span>
            <div className="clinic-scheludes">
                {
                    scheludes?.map(({ hour, patient }, index) => {
                        const bgcolor = index % 2 === 0 ? '#E6E6E6' : '#C9C9C9'
                        return (
                            <div className="clinic-schelude" key={hour}>
                                <div className="clinic-hour" style={{ backgroundColor: bgcolor }}>
                                    <span className="clinic-text05">
                                        {hour}
                                    </span>
                                </div>
                                <div className="clinic-patient" style={{ backgroundColor: bgcolor }}>
                                    <span className="clinic-text07">
                                        {patient}
                                    </span>
                                    <img
                                        alt="add icon"
                                        src="/add_icon.svg"
                                        className="clinic-addsquare"
                                        onClick={() => handleOpenMenu(hour)}
                                    />
                                    {showMenu && showMenu[hour] && <Menu handleMenu={handleMenuItem} patient={hour} />}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}