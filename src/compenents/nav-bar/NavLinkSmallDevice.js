import React, { useState } from "react";
import { Menu } from "react-feather";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useAuth } from "../auth/Authentication";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Logout from "../login-registration/Logout";
import "../../assets/css/nav-bar/navSmallDevice.css";

const NavLinkSmallDevices = ({ userID }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const isUserLoggedIn = useAuth().isAuthenticated;

  return (
    <>
      <Button className="btn-small-device" onClick={handleShow}>
        <Menu />
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Link className="navbar-brand" to="/" style={{ color: "white" }}>
              <img
                style={{ maxWidth: "80%" }}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAAwCAYAAACrHkchAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAALiIAAC4iAari3ZIAAAAZdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjAuMTZEaa/1AAAYwUlEQVR4Xu1dC5gdRZWum0UQAUEBQcUFcRFkWd+KrLuCsCqwKK9kyVTfIbwSQJ6iyxuGEFgSJpnbPTOZ3O47EJIAangqggaBkMfcuncmsDwiIIKAJBtkAZc3AZLxnOq6r65T/ZqZ4JL+v+//bjJ9zulX9elTVadOszHDeb/YIVcQwzmnEovMKVtKMxodHeOY5fYzXrrBTPd6Znnz2fm3/5o54mSlmSFDhgwEuHdK7oLbSedk4O/ZwoV/p7TDwUtHgDMajmR7aTjXuQxtr2JzF39QaWfIkCFDE067YzNwWKvYsXOHc3aCKMsuc2XBDIyuuPcA6aCC/NFNDdsFcbqykCFDhgxN4N5JNaeRMMp6hE2IiLK4d2iLUzIxD9HVlUsbtu3KajarvLmykiFDhgyACQs3ZZb7dN1xJI2ywsay/OhqqMUxmXjmjYTtyinKUoYMGTIAuHd80Hnkzk8QZdniUdYxPE5Za0Vb6eCgbZLB6Kph+09s4cpNlbUMGTJs1JjifgAcxhOaAxmVKGs4x7grNNsUz7iBtIvMoqwMGTL44G476UCAuQvuIB0ISYyygmNZ3P03yq7GPOxrxhLaLjKLsjJkyMD27dgEnMrvSSeCPO6aZFGWLfLKsg/LW6bZpHj6QtJeM5ldOVVZzZAhw0YJy2vTnEeAqWcMrTn7UfY0YnQ1/V7KVitt8Sxz7thM2s6QIcNGBn/27nekE2nmsYmjrInSvuXdo9mieNrPSTsUmVM+TdrOkCHDRgbLG685DwNzF//mfygHQtIWv2NH93+LskMxd+5tz5N2KNpiFXMez6KsDBk2Kvjr+h6kHIhG7j7PLl+8R86uvEU6EYLs9BvWkLZ0vs5+fNNeYPtVyg7FbI1hhgwbG9rcwwjnYaB7AapAdFOiHIhGG5zKCfMJOwS5N1vZ/i/SFs1nsrGsDBk2FvhjV/eRDiRI7r3AjuvfSuoVxC7gWN4mHEgrL1lE2wqSu2+yo+d8UtruqW4Luq9otgxkTjWLsjJk2CjAvUNIB0KRex1KSwIclks5kDoxupocO7oqKrMSOUdcTtqk+adsLCtDhvc7/LGrKulAguTuX5i14MNK00dUlDX1TtqWRnct4/07K6s+Zq7YDmy8ptk0MMt+z5Dh/Q6r/7u0A6HoTlNaLQCHVaQcCJJNWUDYoej2K3MtgChrBmXXQIiysrGsDBk2DIZzrHfllqy78mkIFvZkhcHdWW91R9YxZitQcF2fN0A7kAC5+wobX/qoUmyFKcq69Le0rSC59zbL9/6DstaKzoGPga34UVaW/Z5hQ6Jj8Sasq/xleAYm5+zyZbmC6IGXbBezxbmsUDkMfndQksmAD78tDpYsiB/A75GSnYu2UBLp4VTGs+7qVPi9FJ7bTp+V6ZEloRAdKz7E7CqHZ+1nwFWg927z86f4BrACdqfK8xg18OK3SQdCkbvTlRaJnFPtDxz0MDvxWtqWRneeMkMCL2bQtpGY/Z6tMRwN5OrEYYMgKZj+ngRowyp+mfHSN+u0igfIJWNBOJVD4X7fIOlUboTfXzXxbnAcPm0xANsrPsUScCxz4YE9hhX+extlKTlmD34K7HaCzedkuzNSrIPfZeBsJsauxIswzJLLaGaEgOdprmYbHA9zV3xAiRCA4MYWx4JsxPlqXAfX6VbWPbCHMjQCWN69uvMgyN3XWL7vY0qLRt/grnBw79QPNG50ZbnvsjY3/GQSR1nVk5Tmhoc1Z082aW50GWdM0s27p8LvaZK89GO4zu1qazJw74ugOw/sXKf4M3gZ3QK/31ASsD/3OJBZChyCf6/w6T0E/39E0vIeh789Lcm9Z+D3uTpx7JJ7PjFPzvKeJ50T9x4DHqL+lw547bj7DuyjtZ0Q0f04iGKo+x+f4jV4UC+TUUNczCpvDrpXgF7sHMQmrmTO4L7KUjjG1GGJq0jbphd9x/A4ON94KUwm2mIt2JiWfsjG8v5VaxQmcneW0goFNIB6lMVOuo62pfOnSj0UYPOK+slH0a48zToWbvgo60BnM/+Bd3+i/mIGzrYGrwU+qPkS3TUOA36sI2jLclfLIow1cG+qLpOSODxAdR+4+yxsB2dTOkH9JTmwtBEOEWj7LX5cSdQxcoelaIuVsRyBM/QZaFsPkTbiEyOuaZHRqC0uCuhJstnic0oiNRI7LEdcQMmnIjhiZTUhuHun3ihIvg5vvR2VVjjgpsMBvZ2bdhdlhyBEVxiRxIEtdgCH+Dp5EQi+J9nv3Jssz4u7L7IJ7tbqrzR430dA/mXtmnDvKiURD+jg5HUM2Ml75ygJH5Z7riaTnm9IxxJEo4baejgPTH/BLmUyJHBYrFucTt37dBTPsJ77PqEs6+gZ+ieQ+7Oul5K2mG8scIkwOSx7cC8lkRqwb3KSjCw93juws3ymCfkUfBq68a1ZBrHQVtxHbxAGcrdbacUCho7s5OtpWwHmLrxjVZJ+PVw4HDOgLgRBaIAbcizrNIiuZFeqdn70jGoLUKbpeii9tfC7k5KIBvd6NBsy/cRpbRgbxmE92irneuTYUxgwcrM8vAZNdoC1hOJmjKrDAtriHjLymVP+JLSn8LWztsDB5z/A71L4HYTfl1q2U7RFQe1Bx1g6LAcnBgjbs8r6pFp35XxK1qdYCvdgMnRzvwSOaCfmDOBvO2y7Ds6tNbiwK+/Ctm8rqwlhubdrDYIiZp5P7De/dSgcc3U/aSvIKdfKE4n1hZ0a+h5IOJYlfqg0xx750pTAOb4aOe7XPm9buMavBfSQPUoiHG3udnAv3yD0ZyiJBkiHJWv2/7RBdy78Xi2JSby4TAppFR3gTJ9g23IvJruEmsMCcu8X7BA3/hgRwvLe0uy0zdlNbW3A5LBwXKq70gYPyHjJbnEEtIWD4d+HsoK4EF9mpB6Q2dUJyroPeKGC/BJKVvEv6FyArbOB+CKGBzRXqNxJ6CiK9fKYKNiVsykdkP+KkkiNJA4rVxC3kbJOJXzYw1+pgsM4OGMIOqJLbUkIy/0aNID1WoMg6c5RWvGQ9z4NDZQI53ViQqk8kbDa7wRA/kr/AsSh2DB5WVp0VaejJMzgxSs0PQ7d8Pz8cGeHsLzzdV14yVDdJ8s7k5C9Vm0dHXDvYW0fcj/eAGvv2VZJRSO2w6qcSN13Zg8coCRodC7aAuRuD+pJ2uWKkvLhz4zpcj6XsZ7lUS/0HDzc7dBu3yT0sf0/y1xi0B8cAiUPf29MpKQE2LGDdpHoZJRIHfD3FUE5OObVuMmXiEDXsl1zTrWY/jnEN16wMdB8ix01+1NKKx7wrUzbauXkBS0XgDnV/1AWouHcvz04or+tKMtyTyTPE51Hu/v3SorGxNIO0kFp+uFpJHI2Tc7iaXpkAi5EY2fosvEmPGLDn3kM7qPGR7WVDCZglzOoTzkszH2i7nmh+j0lYcaM5Vvhg0for6tHSwtXboovPUIGH9p7Ei0F667sD3prNTtA2PafSqqBsXRYhpc+s5dpbRVkh3RZ8TocR/xhi9TA6W/LjRddca+ktOIBnVvc6OqSRYELUHk4ctakCaYLTnKsq5JO6NgUzpuKrhShmxUFnIUN6uGAPA7Mm4BpCkGdsBSR995hAd3VLD/nC0raDMt9UdOl9EbisAAge2lQFwl2D5IC0J2ktkObWkNFI5FwxFmkPafylNbLsMUZhBw4t6FvKonUSOSwML+NkAUbqzD6ZL2Lt1SiYwDLu0lrCBRl5jl075LAcntJW0FOnq+fPJB1i6OUpWh0Lfk46Ki+cTSx66A0Rx/E59BaiNcyKs8Mu3DUWBQvtiw0r2N4OAfyK3V592YloaOteLIuX7pBbR0dcG9Q20eQ3H0Z2tb+SoMG5bDwZRtEQRxD3m8cr4qDQuUwWr86CTdDJLGQ3F4op2tPHYs3ydmVR0mbvUN7Kykf3eKHpFzqgesG4LzI5W6Uw8KcRkq2iW+C87obfqdBT+lA5izdXmmOEPn+veCmr9MaAskYUUEzcGBejp1QtlqZu/g31Emjx16ZbCyrPIu0Q9EWT4dn8aaEnIJ3/0idZwvDHEkNOBur673IJvTqbzDzdx3N3YVaykUL3VvV1tFB3A+M4HBDm+uXzaaAJYyCOpTDskWeut/wgjpMSYTDEEHB39vxpQDO5UVi+0sjqgpiGx3ReUrCx5g6rOolpO2ZRDZ678ot4flZQ8nTFOvhuq0G/hKO9Sfpl+Zg9nOwEVDE5MWjvM8qrXiwvC7NDsUT5hEn2CDcTHMjDqK3uiPoxI+yxiL7HRMkg+eID1vwxSD/735NadHAVAY/paHVnuXp4xtkbXx3idpK471yWJTz8f++Dtraj5RmK6gudlvp62prAyN0WPAg0l2jroH9WdcQRvHaNtAZWVTaObAzadcR1ykJH2knFGLA6LAKhqTUwsD3YHtjFUsiggNzxJJkjra99Dn/oQk0ApIJZ44m9O4IOtTUusbcRb8mTqiJWPs9SZRVqMwk7VAc7ez34Kf8a5RLbDxcFhP4u3uX0jTD8vo0Pctb3bLUB9fZ6TJo3x93MSFfOlbXc1+CXywt9FCdGDHWaHlr4Fz+LGl5/we/ODlwlrKogxd1h5X3LNC7Uft7g53a+CXpsPr3UVsbgBccda/hwTtCSZiBKTK2eIHQf4f1LfsIvBC/SGzDNjpVWUgHjNyowpQ4iN8Mw+wkOLJ/VxKpkdhhIWC/8AxF55aZaGPkVZ5FpsNo4O4CrQGQdN+Vzi0JZF4OZSvA4yG6ivGlHfDmbcpyNJJGWYVRzH4nIxbvJdmFk05Fm9xYHzl2c9ScXeBe6evoLLcx08nd6/Xt4GhwcWoYrFKe0EvD85VFHdTqCV7kspFyz9a2NXidfAHUENdhdYsjyPscltuHL8SC2BvkHgzqKfovlkJ1H2Ibdsmil11FAOwQSaiirDb7GEOHZVrSJBM/w4DPm13pg+c49ooTjRDVKmsGtF29m3REwQZA0l2otOJhvLM96L2q29EZGV3VmXQsqxJ/LAuXBoxGlIVrBqmHCnOqaqCTc1tzfCjwYknT4+5T/gdu+3cmHVqcRdOj5rDcS5RFHdxbpMvDfmvA6Mwc6f+2np3P3ce07bz4LbmtGQaHBXwciNUZ0CnViFnoTwCpqEpRrK/PMNqDe9EylcY9TgNw3nAMVE7WnUrCh2lCYTQcllM9h7RtD4QPW9QwfcXWrFA+GnQWAOFay4oUmj2aYl24Y8S1acGbTxEbEg7MJwG5tIRge2k4VyhDX5Y6AZ3wFhuv9hCNnuWfAKdFJ+URHJU1hlZRH7vC3CHMqaoh7/4zIYM8XEnQMK0N5N4x8IuZ5q1/x25pnOUvGOloumk4AoeF4O4EID1Bw9375bpV8tuYRX3sxi4fTt3jEbAxjuRnautt1haLlEQ6dC37R82mz6uVhA9Td9cePFJJpMaIHVYQnQ9sAdfrq3A/jgc7s4H4gjA/73bFMKmXIPMcGvQtSise5OJd9xXSVpDcFXiQ5MGTFA8ni7JEgbZDcmRf2MGuCzkz6HpKogHu3UXIQQQZkXPGvWsIvSeB1PU+U2mFI+8eqenisiCOn3Zzq3iPJC1vCRAH9e+B/0MXDyNFydvg/1gVwpzka3m/BLbuA8fOgsBKITgDGpRF+uNnxCfhCIdVEAcR9zclxd3BMjPQrvSkUXg5psrBqsEud2g2gXAupysJHyaHleRlbsA4p3ImaRu6wUpk5LDFbmDz5uA+fIpnlFQAluvqN56gnLEhpo3DgG9ayhbFfOlA5iz/DDSA2Ku+mVOOn/2eOC+rOllpJgeZsOm9Q2ZiWyX60/wYLYXB6t8d9hPdjefuC2xKzHV6lMPCWb3RBM46BvfBi1PU1lZgbhrp+A3Ml76jNBsYFYeFdZpEJzVUANs9XR5YEJcrkWRwKh+GfekfCbaxKxqY/h9LhwXOkbRdqOrd7pEAXsxwbvcT+1qnJJqAS0LiRlf4ZkwCLJ2Cs0a0rSCrtQFhONBrAgcewoRjWY7oou0QxLysNHWn/ejqKeIcb1QSQWCC53JNHh9UzJAPAz243kpevFRJR4OXjiBsvHcOC+HPMEdkxytShQFTOyyBVTCfgH/PZGF1sHrEfrouEKOsFFUTYL9zaHviPiXSAFZTJWThRW4pidRI5bDs6iFw/DezWWW9akYIcnb5JnJfGuQqe+LGBykHQSNyhILg3oWkLZLuD5QWjgt8Fm42VQOaJL5llGY05IxhgnpZabKV88as9pvAwVwuidP0fl5aF/wfk0HpZEpeau0CBIGztWFRFvdegyhlOyUdDUx70G0Mqa2jA7/L2LoPzLAPg5xV9aKrh9AOi3YoTmUBdL0mse7Bo6DNTZDE3Cy/YsM3WN9DuOQpevGuTB4lIwR0Mn/EMslKMhrdlVNJO0DYps+MGx1WJV1V2mY44mTSds/QfkqiFbPKH4Vnqzaz+Qpcx3PJBdtByDLS5Bfc31ASClg7iFrxTvMOpRUPOJNjGn8IEgdRA9PtcKPnESdgIEZZCdYYGlahk0yalyXXDJLRVVquYfnO8A8KUA6gRvWF7NigHBZGN6MJLsvUBPdxhtpqhpwBJWZHm9lW/L6SbsAZ3Je6t+gclMTIYQ8cAG3WNIC8Cp2mkqSBJZXlqgyDDVsMkT2JMXVY1RNI2z30Gkw4dqpn9Bwcy3lkxIXPrC2+A3pPEnpAMagkFcJzXprorpezWUnA3bNpWwRx3CSIsYyy4OJBA4hdaxsadvwoi54ZHCH9T/4bcXTp8yBHLVZ/h/G+XZVUPPwtOywf0H0uXqTrK+LsYhAbwmEBoE2Z65lLZ1a9RUZv/cv9L6LjWs++wV1ZQQ5uP6Xp1Ci7luLzUicIcB6kjj+QPU2yID80jMnTM9VStdnw2+dTXAX25/oU17KucmPRdBKHhQmjYTN+fkrDI8Ab5b78xdLmcwZiyWVlHYDTwlR5Dopxsq+bgeE7d58nbQXJ3YdNyYxwAZNEWQ/LBhATcNEc2g5BjLLirDHETzlZ3pPaOY6UWBnU9Om0GnAdoq6bvMrCRG9/zQ6mD0yau42kLAaIi7CBuDYUZ5hrxDLWdcov2nyF5efr0SH3qATleLOYNeCEBDX2SjmswnJDcqcwZ+OngYyShKD21UrM5hYvQ7uKfmnKgfby0WoPOmSEQuilZEu3s1A5jpRxygcqiRqwSxzjvBPQrjwvVxLU0SbHUFpvtolUMl4YMPGPskORl8zVF2YuhShLlpSlTypACD3jz4xglIUryAk7FGOtMfRzoALnJx+q/5X0l6+satD9Q52yqoJMHQASSbbcDc/8bS9+FeSaoiyIiif2hWckUzDNWKYlltkOgsz5K52rtsaHVfwu2Gqtd085rO6hr9P3tHy2khg9YF6WLarU/hLTluWCw79SPtoOqzn73ylbBhk9R3D6iq1hG86WJkgONXKtrOhQB1apJIvBkbxXacUDTp+TBeNIPho19pQryCxZ6qQoPjhmY1mY/R4WZWFFBpkDFThH/zuNGPnVGA2q6qdMOI0oQ829X9XlMTkzDf4/OSwE1r9C51+z0+bp0ciGdFiIjhUfAqc1n9pnbNriBZxxUxbNME8opCI4yOOU5WQOqwZb/AscO1HMLyaxhhg4YWVNIV/CWapAgzGRSMQLg/8NPcIOxWJrdjOF7oE98E1DnhxBuJj6G9aEnvuSZb8XhDkvi1o0LEsYR9RrpzD+55uD81ut2cN8uTBg2ZhalIVduzQwZ96nI+/Xo3OsdqrJpnRYCL8opF92OU84LGfwS+T9DJZqGW045e9D9+8xat9GYg4iZnj3PRCv3aCDoOykZIvD8r/crMuEOSwEDs34lRtwHC1e1V9bPAucCkFB4CtSWDM75ro+aAQDSise/O/tEQ8aQewGxfxSCpzIteRJ0nwoWV5WlSy0TxKnqKkoy5jVXupVEsnBvVM0e7g+kEo8bQZmnftpCLHH81qQL+6t7XckpBZyU0Uc8XuII8GkwjbwArwHrrn+Euwp46e3tPvJ7Apd+HA0gR+ZsKuHQ9u5FfgydRxqQBrX2s1gXYPJJklm4uSUmCfpz9JhDpdPubID8w6B+FV0HHxHgmMY51Qv8Fk5b5wjzqoRXsqNogadAzvDsU9S5LJEOZIq4GfC3MUfBMe9LzjWM/xjqVwtj7W7ehX8XikntLorXzA/s0k+lNnmxSohWwf3TiLtUGwr6ksxTCgM7g4nlyDKCnzRJAxOZSe4mQlmDIkoiy5DvDZ2bXIKfi32B8EBrQE+Kx2i7xT1L900A6OskXxVGStB4Nd4uFsAXqk4XbYb2XZKl8BxnQuO6BxJ7L5irpgk3H+sToGUESdE0Jj0GYR11Z5g8yBJdGjWnP3gfHdRW9MDhwOosiQzlm8l0woa3Jvhmraw7wuOBfBlhw4BFyajA8C8L0zCHLXqm+9H+J9fciPZGHuJD+5dBvbnRxPsU9+rCwE4C5wKxWU1YawVD0u2xtDwOSMDn9KiLJwxw2KGWFwPc9uQSZI1M2TIQICxvwL6Wcq4ZqppBAAAAABJRU5ErkJggg=="
              />
            </Link>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="navigationBarLinks nav-link-small-dev">
            <ul>
              {isUserLoggedIn ? (
                <>
                  <li>
                    <Link to="/estimated/intrinsica/perpetual/growth">
                      Est. Perpetual Growth
                    </Link>
                  </li>
                  <li>
                    <Link to="/estimated/intrinsica/value">
                      Est. Intrinsic Value
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )}

              <li
                data-bs-toggle="modal"
                data-bs-target="#contactUsForm"
                data-bs-whatever="@getbootstrap"
              >
                <a>Contact us</a>
              </li>
              {isUserLoggedIn ? (
                <li className="nav-item dropdown my-account-dropdown">
                  {/* // eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    My Account
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item">
                        <Link to={`/my-profile/${userID}`}>My Profile</Link>
                      </a>
                    </li>
                    <li>
                      <Logout />
                    </li>
                  </ul>
                </li>
              ) : (
                <li className="nav-sign-in">
                  <Link to="/login">
                    <span>
                      <FontAwesomeIcon icon={faUser} className="icon" />
                    </span>
                    <span className="text">Sign In</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavLinkSmallDevices;
